import { Component, OnInit } from '@angular/core';
import { Survey } from '../POJO/survey';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  survey : Survey;
  constructor(private surveyService : SurveyService) {
    this.survey=new Survey();
   }

  ngOnInit() {
    this.surveyService.readActive().subscribe((s)=> (this.survey=s))
    console.log(this.survey);
  }

}
