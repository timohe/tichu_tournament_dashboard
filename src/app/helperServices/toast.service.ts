import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
	constructor(private toastController: ToastController) { }

	public async presentToast(errorMessage = 'Something went wrong.') {
		const toast = await this.toastController.create({
			message: errorMessage,
			duration: 4000,
			position: 'top'
		});
		toast.present();
	}
}
