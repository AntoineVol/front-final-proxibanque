import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../POJO/survey';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.css']
})
export class ConfirmationMessageComponent implements OnInit {

  private survey : Survey;
  private convocation : string;

  constructor(private surveyService : SurveyService) { }

  ngOnInit() {
    this.surveyService.survey.subscribe((s) => this.survey= s);
    this.calculDiffDay();
    console.log("passage par init");
    
  }

  calculDiffDay(){
    let daySurvey : Date= new Date(this.survey.expectedDate[0], this.survey.expectedDate[1]-1, this.survey.expectedDate[2]);
    let today = new Date();
    let nbjours = Math.round(this.dayDiff(daySurvey, today));
    this.convocation= nbjours.toLocaleString();
    if (nbjours <= 0 ){
      this.convocation = "quelques";
    }

    console.log("convocation "+this.convocation);
  }


  dayDiff(d1:Date, d2:Date)
  {
    let nd1 = d1.getTime() / 86400000;
    let nd2 = d2.getTime() / 86400000;
    return (nd1-nd2+1);
  }


}
