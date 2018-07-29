import { Injectable } from '@angular/core';
import { Survey } from '../POJO/survey';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment as ENV} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private subject: BehaviorSubject<Survey>;
  private apiUrlSurvey : string;

  constructor(private httpClient : HttpClient) { 
    this.apiUrlSurvey = ENV.ApiUrl + "survey/";
    this.subject = new BehaviorSubject(new Survey());
  }

	get survey(): Observable<Survey> {
		return this.subject.asObservable();
}

  public readActive(): Observable<Survey>{
    let result = new Subject<Survey>();
    this.httpClient.get<Survey>(this.apiUrlSurvey)
    .subscribe(
      (s)=>this.subject.next(s))   
    return this.survey; 
  }
}
