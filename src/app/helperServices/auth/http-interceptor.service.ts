import { Observable, throwError, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
	constructor(private storage: Storage) { }

	public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return from(this.handleAccess(request, next));
	}

	private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
		const token = await this.storage.get('ACCESS_TOKEN');
		let changedRequest = request;
		// HttpHeader object immutable - copy values
		const headerSettings: { [name: string]: string | string[]; } = {};

		for (const key of request.headers.keys()) {
			headerSettings[key] = request.headers.getAll(key);
		}
		if (token) {
			// eslint-disable-next-line @typescript-eslint/dot-notation
			headerSettings['Authorization'] = token;
		}
		headerSettings['Content-Type'] = 'application/json';
		const newHeader = new HttpHeaders(headerSettings);

		changedRequest = request.clone({
			headers: newHeader
		});
		return next.handle(changedRequest).toPromise();
	}
}
