import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl = "http://5.135.190.66:2002/";

  constructor(public http: HttpClient) { 
  }

  retrieveArticles() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {headers: headers}
    return new Promise((resolve, reject) => {
      this.http.get(this.apiBaseUrl+"articles", options).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("error");
      });
    });
  }

  loadExplain(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {headers: headers}
    return new Promise((resolve, reject) => {
      this.http.get(this.apiBaseUrl+"explain/"+id, options).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("error");
      });
    });
  }

  loadTimeline() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {headers: headers}
    return new Promise((resolve, reject) => {
      this.http.get(this.apiBaseUrl+"timeline", options).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("error");
      });
    });
  }

  retrieveArticle(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {headers: headers}
    return new Promise((resolve, reject) => {
      this.http.get(this.apiBaseUrl+"article/"+id, options).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("error");
      });
    });
  }

  retrieveQuestions() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {headers: headers}
    return new Promise((resolve, reject) => {
      this.http.get(this.apiBaseUrl+"game", options).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("error");
      });
    });
  }

  retrieveAnswers(question) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {headers: headers}
    return new Promise((resolve, reject) => {
      this.http.get(this.apiBaseUrl+"answers/"+question, options).subscribe(data => {
        resolve(data);
      }, err => {
        console.log("error");
      });
    });
  }

}