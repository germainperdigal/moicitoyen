import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastController, ModalController } from '@ionic/angular';
import { AnswerPage } from '../answer/answer.page';
import { NotifyPage } from '../notify/notify.page';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  public play = false;;
  public questions : any = [];
  public answers : any = [];
  public currentQuestion: any = [];
  public indice: any = [];
  public game = 0;
  public score = 0;

  constructor(private apiService: ApiService, private toast: ToastController, private modalController: ModalController) { }

  ngOnInit() {
    this.playGame();
  }

  playGame() {
    this.play = true;
    this.game = 0;
    this.score = 0;
    this.indice = [];
    this.loadQuestions();
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

  loadQuestions() {
    this.apiService.retrieveQuestions().then((datas:any) => {
      this.questions = datas;
      this.currentQuestion = this.questions[this.game];
      this.getAnswers(this.questions[this.game].ID);
    });
  }

  getAnswers(question) {
    this.apiService.retrieveAnswers(question).then((datas:any) => {
      this.answers = datas.data;
    });

  }

  selectAnswer(id) {
    if(this.answers[id].correct == 1) {
      this.score++;
      this.game++;
      this.presentToast("<b>Bravo !</b>" ,"success");
      this.presentModal(this.currentQuestion.ID);
    } else {
      if(!this.indice[this.currentQuestion.ID]) {
      this.presentToast("<b>Essaie encore, on t'aide :</b> "+this.currentQuestion.indice, "danger");
      this.indice[this.currentQuestion.ID] = true;
      } else if(this.indice[this.currentQuestion.ID]) {
      this.presentToast("<b>Dommage...</b>", "danger");
      this.game++;
      this.presentModal(this.currentQuestion.ID);
      }
    }
  }

  async notify() {
    const modal = await this.modalController.create({
      component: NotifyPage,
    });
    return await modal.present();
  }

  async presentModal(question) {
    const modal = await this.modalController.create({
      component: AnswerPage,
      componentProps: {
        'id': question
      }
    });
    modal.onDidDismiss().then((detail) => {
      this.disableGame();
      this.setQuestion();
    });
    return await modal.present();
  }

  setQuestion() {
    this.currentQuestion = this.questions[this.game];
    this.getAnswers(this.currentQuestion.ID);
    this.indice[this.currentQuestion.ID] = false;
  }

  disableGame() {
    if(this.game > 2) {
      this.play = false;
    }
  }

}
