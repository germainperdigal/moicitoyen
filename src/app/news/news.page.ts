import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { NotifyPage } from '../notify/notify.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles: any = [];

  constructor(private apiSrv: ApiService, private modalController: ModalController) { }

  ngOnInit() {
    this.apiSrv.retrieveArticles().then((datas:any) => {
      this.articles = datas.data;
    });
  }

  redirect(link) {
    window.open(link, '_self')
  }

  async notify() {
    const modal = await this.modalController.create({
      component: NotifyPage,
    });
    return await modal.present();
  }

  
}
