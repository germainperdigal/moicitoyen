import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {

  @Input() id: Number;
  explication: any = [];

  constructor(public modalCtrl: ModalController, private apiService: ApiService) { }

  ngOnInit() {
    this.loadExplain();
  }

  loadExplain() {
    this.apiService.loadExplain(this.id).then((data:any) => {
      this.explication = data.data;
      this.explication = this.explication[0].explaination;
    })
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
