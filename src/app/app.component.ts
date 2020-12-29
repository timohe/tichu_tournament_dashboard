import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Plugins, StatusBarStyle, Capacitor, KeyboardInfo, KeyboardResize } from '@capacitor/core';
import { StatusMessage } from './types';
import { SERVER_URL, TOURNAMENT_WEBSITE_MODE } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
const { Network, SplashScreen, Device, StatusBar, Keyboard } = Plugins;

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private router: Router,
		private storage: Storage,
		public alertController: AlertController,
		private translate: TranslateService,
		private httpClient: HttpClient,
		private activatedRoute: ActivatedRoute
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
		const info = await Device.getInfo();
		this.storage.set('APP_VERSION', info.appVersion);
		this.storage.set('PLATFORM', info.operatingSystem);
		this.storage.set('APP_BUILD', info.appBuild);
		this.APIgetStatusMessage().subscribe((response) => {
			if (!response.active) { return; }
			if (response.active && !response.excludedBuilds.includes(info.appVersion)) {
				this.presentStatusMessage(response.title, response.message);
			}
		});
	}

	APIgetStatusMessage(): Observable<StatusMessage> {
		return this.httpClient.get<StatusMessage>(`${SERVER_URL}/users/statusMessage`).pipe(catchError(err => {
			console.log('there was an error getting the status message');
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
				style: StatusBarStyle.Dark
			});
		}
	}

	initializeApp() {
		this.setLanguage();
		this.platform.ready().then(() => {
			// Keyboard.setResizeMode({mode: KeyboardResize.Ionic});
			this.checkForStatusMessage();
			this.setStatusBarForiOS();
			if (TOURNAMENT_WEBSITE_MODE) {
				// don't forward in this case, use what the user inputted to jump directly to the tournament page
				console.log('route', this.activatedRoute.snapshot.queryParams);
				// use like this http://localhost:8100/tournament-dashboard?tournamentName=test;
			} else {
				this.storage.get('ACCESS_TOKEN').then(
					data => {
						if (data) {
							this.router.navigateByUrl('/tabs/welcome');
							setTimeout(() => SplashScreen.hide(), 500);
						} else {
							// user is NOT logged in
							this.router.navigateByUrl('/login');
							setTimeout(() => SplashScreen.hide(), 500);
						}
					},
					error => console.error(error)
				);
			}
		});
	}
}


