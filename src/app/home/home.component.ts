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
  constructor(surveyService : SurveyService) { }

  ngOnInit() {
    this.survey = surveyService.
  }

}
