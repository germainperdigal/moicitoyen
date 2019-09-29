import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { NotifyPage } from '../notify/notify.page';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelinePage implements OnInit {

  timeline: any;

  constructor(private apiService: ApiService, private modalController: ModalController) { }

  ngOnInit() {
    this.apiService.loadTimeline().then((datas:any) => {
      this.timeline = datas.data[0].timeline;
    })
  }

  async notify() {
    const modal = await this.modalController.create({
      component: NotifyPage,
    });
    return await modal.present();
  }

}
