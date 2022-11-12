import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Style } from '@capacitor/status-bar';
import { StatusMessage, UserAutoCreateResponse } from './types';
import { SERVER_URL, TOURNAMENT_WEBSITE_MODE } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { Network } from '@capacitor/network';
import { SplashScreen } from '@capacitor/splash-screen';
import { Device } from '@capacitor/device';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { StatusBar } from '@capacitor/status-bar';
import { ToastService } from './helperServices/toast.service';
import { Capacitor } from '@capacitor/core';
import { FriendRequestService } from './helperServices/friend-request.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	// pincode: string = '';
	constructor(
		private platform: Platform,
		private router: Router,
		private storage: Storage,
		public alertController: AlertController,
		private translate: TranslateService,
		private httpClient: HttpClient,
		private toastService: ToastService,
		private friendReqService: FriendRequestService,
		private zone: NgZone
	) {
		this.initializeApp();
	}

	handler = Network.addListener('networkStatusChange', (status) => {
		if (status.connected === false) {
			this.presentNoInternetAlert();
		}
	});

	async presentNoInternetAlert() {
		const alert = await this.alertController.create({
			header: this.translate.instant('general.offline_title'),
			message: this.translate.instant('general.offline_content'),
			buttons: ['OK']
		});
		await alert.present();
	}

	async presentStatusMessage(title: string, statusMessage: string) {
		const alert = await this.alertController.create({
			header: title,
			message: statusMessage,
			buttons: ['OK']
		});
		await alert.present();
	}

	async checkForStatusMessage() {
		const info = await App.getInfo();
		const dvc = await Device.getInfo();
		this.storage.set('APP_VERSION', info.version);
		this.storage.set('PLATFORM', dvc.operatingSystem);
		this.storage.set('APP_BUILD', info.build);
		this.APIgetStatusMessage().subscribe((response) => {
			if (!response.active) { return; }
			if (response.active && !response.excludedBuilds.includes(info.version)) {
				this.presentStatusMessage(response.title, response.message);
			}
		});
	}

	APIgetStatusMessage(): Observable<StatusMessage> {
		return this.httpClient.get<StatusMessage>(`${SERVER_URL}/general/statusMessage`).pipe(catchError(err => {
			return throwError(err);
		}));
	}

	async setLanguage() {
		this.translate.setDefaultLang('en');
		const lang = await Device.getLanguageCode();
		if (lang.value === 'de') {
			this.translate.use('de');
		} else if (lang.value === 'en') {
			this.translate.use('en');
		} else {
			this.translate.use('en');
		}
	}

	async setStatusBarForiOS() {
		if (Capacitor.isPluginAvailable('StatusBar')) {
			StatusBar.setStyle({
				style: Style.Dark
			});
		}
	}

	async initFirebaseAnalytics() {
		// This is for the web implementation
		// See https://github.com/capacitor-community/firebase-analytics
		FirebaseAnalytics.initializeFirebase({
			databaseURL: '...',
			apiKey: 'AIzaSyBD2HeZv6y-WHesi2xPDR4lJ52BQsqdiKQ',
			authDomain: 'tichu-stats.firebaseapp.com',
			projectId: 'tichu-stats',
			storageBucket: 'tichu-stats.appspot.com',
			messagingSenderId: '1099165342061',
			appId: '1:1099165342061:web:1cba9de4b2b4779b1c2264',
			measurementId: 'G-H3VZT74VVD'
		});
	}

	
	APIautoCreateUser(): Observable<any> {
		return this.httpClient.get<any>(`${SERVER_URL}/users/autocreate`).pipe(catchError(err => {
			this.toastService.presentToast();
			return throwError(err);
		}));
	}

	async autoCreateUser() {
		this.APIautoCreateUser().subscribe(async (res: UserAutoCreateResponse) => {
			await this.storage.set('ACCESS_TOKEN', res.user.access_token);
			await this.storage.set('USER_ID', res.user.id);
			await this.storage.set('USER_EMAIL', res.user.email);
			await this.storage.set('EXPIRES_IN', res.user.expires_in);
			await this.storage.set('HAS_SEEN_INTRO', false);
		});
	}

	initializeApp() {
		App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
			this.zone.run(() => {
				// Example url: https://tichustats.com/pin-login?code=1234
				const slug = event.url.split(".com").pop();
				if (slug.includes('pin-login?code=')) {
					this.storage.set('PIN_CODE', slug.split("pin-login?code=").pop());
				}
			});
		});	
		this.setLanguage();
		this.initFirebaseAnalytics();
		this.platform.ready().then(() => {
			this.checkForStatusMessage();
			this.setStatusBarForiOS();
			if (TOURNAMENT_WEBSITE_MODE) {
				// don't forward in this case, use what the user inputted to jump directly to the tournament page
				// console.log('route', this.activatedRoute.snapshot.queryParams);
				// use like this http://localhost:8100/tournament-dashboard?tournamentName=test;
			} else {
				this.storage.get('ACCESS_TOKEN').then(
					async (data) => {
						if (data) {
							this.friendReqService.showFriendRequestIfPresent();
							this.router.navigateByUrl('/tabs/welcome');
							if (Capacitor.isPluginAvailable('SplashScreen')) {
								setTimeout(() => SplashScreen.hide(), 500);
							}
						} else {
							// console.log(`Forwarding to /login${this.pincode}`);
							this.router.navigateByUrl(`/login`);
							if (Capacitor.isPluginAvailable('SplashScreen')) {
								setTimeout(() => SplashScreen.hide(), 500);
							}
						}
					},
					error => console.error(error)
				);
			}
		});
	}
}


