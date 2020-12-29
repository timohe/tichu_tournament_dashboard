import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserToLogin, UserToRegister } from '../../types';
import { AuthResponse } from './auth-response';
import { environment, SERVER_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	authSubject = new BehaviorSubject(false);
	constructor(private httpClient: HttpClient, private storage: Storage) {
	}

	register(user: UserToRegister): Observable<AuthResponse> {
		return this.httpClient.post<AuthResponse>(`${SERVER_URL}/users/register`, user).pipe(
			tap(async (res: AuthResponse) => {
				if (res.user) {
					await this.storage.set('ACCESS_TOKEN', res.user.access_token);
					await this.storage.set('EXPIRES_IN', res.user.expires_in);
					this.authSubject.next(true);
				}
			})

		);
	}

	login(user: UserToLogin): Observable<AuthResponse> {
		return this.httpClient.post(`${SERVER_URL}/users/login`, user).pipe(
			tap(async (res: AuthResponse) => {
				console.log('this is called');
				if (res.user) {
					console.log(`This is the user`, res.user);
					await this.storage.set('USER_ID', res.user.id);
					await this.storage.set('USER_EMAIL', res.user.email);
					await this.storage.set('ACCESS_TOKEN', res.user.access_token);
					await this.storage.set('EXPIRES_IN', res.user.expires_in);
					this.authSubject.next(true);
				}
			})
		);
	}

	async logout() {
		await this.storage.remove('USER_ID');
		await this.storage.remove('USER_NAME');
		await this.storage.remove('USER_EMAIL');
		await this.storage.remove('ACCESS_TOKEN');
		await this.storage.remove('EXPIRES_IN');
		this.authSubject.next(false);
	}

	isLoggedIn() {
		return this.authSubject.asObservable();
	}
}
