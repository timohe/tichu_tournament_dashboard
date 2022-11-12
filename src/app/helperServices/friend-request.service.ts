import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { ToastService } from '../helperServices/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { FriendRequest, User } from '../types';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

  constructor(
	  public alertController: AlertController,
	  private httpClient: HttpClient,
	  private toastService: ToastService,
	  private translator: TranslateService
  ) { }


	async showFriendRequestIfPresent() {
		this.APIgetFriendlistRequests().subscribe((friendReqs: Array<FriendRequest>) => {
			friendReqs.forEach(req => {
				this.presentFriendRequest(req);
			});
		});
	}

	async presentFriendRequest(friendRequest: FriendRequest) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: this.translator.instant('general.friendrequest_received_title'),
			message: this.translator.instant('general.friendrequest_received_message', {
				name: friendRequest.inviterName,
			}),
			buttons: [
				{
					text: this.translator.instant('general.friendrequest_received_no'),
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Canceled');
						this.APIdeleteFriendlistRequests(friendRequest._id).subscribe((response) => {
							// this.toastService.presentToast(friendRequest.inviterName + ' ' + this.translator.instant('general.friendrequest_received_toast_confirmation'));
						});
						console.log(`This is the data`);
					}
				}, {
					text: this.translator.instant('general.friendrequest_received_yes'),
					handler: () => {
						this.APIaddToWhitelistAndDeleteRequest(friendRequest.inviterId, friendRequest._id).subscribe((response) => {
							this.toastService.presentToast(friendRequest.inviterName + ' ' + this.translator.instant('general.friendrequest_received_toast_confirmation'));
						});
					}
				}
			]
		});
		await alert.present();
	}

	APIgetFriendlistRequests(): Observable<any> {
		return this.httpClient.get<any>(`${SERVER_URL}/users/getFriendRequests`).pipe(catchError(err => {
			this.toastService.presentToast();
			return throwError(err);
		}));
	}

	APIdeleteFriendlistRequests(requestId: string): Observable<any> {
		return this.httpClient.delete<any>(`${SERVER_URL}/users/deleteFriendRequest/${requestId}`).pipe(catchError(err => {
			this.toastService.presentToast();
			return throwError(err);
		}));
	}

	APIaddToWhitelistAndDeleteRequest(idToAdd: string, friendRequestId: string): Observable<User> {
		return this.httpClient.post<User>(`${SERVER_URL}/users/addToWhitelistAndDeleteRequest`, {
			id: idToAdd,
			friendRequestId: friendRequestId
		}).pipe(catchError(err => {
			if (err.error.userAlreadyOnWhiteListError) {
				this.toastService.presentToast(this.translator.instant('profile.toast_userAlreadyOnWhiteListError'));
			} else {
				this.toastService.presentToast();
			}
			return throwError(err);
		}));
	}
		
}
