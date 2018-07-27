import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '../POJO/response';
import { ResponseService } from '../services/response.service';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../POJO/survey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-comment',
  templateUrl: './survey-comment.component.html',
  styleUrls: ['./survey-comment.component.css']
})
export class SurveyCommentComponent implements OnInit {
  private response : Response;
  private survey : Survey;

  constructor(private responseService : ResponseService, private surveyService : SurveyService, private router : Router) {
    this.response=new Response();
   }

  ngOnInit() {
    this.surveyService.survey.subscribe((s)=> (this.survey=s))
  }

  submit(commentForm : NgForm){
    console.log("Passage par submit : " + this.response);
    
    let newResponse = this.response;
    newResponse.survey = this.survey;
    this.responseService.create(newResponse);
    commentForm.reset();
    this.router.navigate(['commentConfirmation'])
  }
}
