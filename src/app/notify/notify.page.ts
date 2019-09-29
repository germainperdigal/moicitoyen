import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.page.html',
  styleUrls: ['./notify.page.scss'],
})
export class NotifyPage implements OnInit {

  constructor(public modalController: ModalController, private toast: ToastController) { }

  ngOnInit() {
  }

  closeUp() {
    this.modalController.dismiss();
  }
  
  close() {
    this.modalController.dismiss();
    this.presentToast("<b>Et voilà ! Tu recevras nos notifications par Whats App !</b>", "success");
  }

  async presentToast(toastMsg : string, color) {
    const toast = await this.toast.create({
      message: toastMsg,
      duration: 2000,
      position : 'bottom',
      color: color,
    });
    toast.present();
  }

}
