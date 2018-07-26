import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../POJO/survey';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  @Input() survey : Survey;

  constructor() { }

  ngOnInit() {
  }

}
