import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '../POJO/response';
import { ResponseService } from '../services/response.service';

@Component({
  selector: 'app-survey-comment',
  templateUrl: './survey-comment.component.html',
  styleUrls: ['./survey-comment.component.css']
})
export class SurveyCommentComponent implements OnInit {
  private response : Response;

  constructor(private responseService : ResponseService) {
    this.response=new Response();
   }

  ngOnInit() {
  }

  submit(commentForm : NgForm){
    console.log("Passage par submit : " + this.response);
    
    let newResponse = this.response;
    this.responseService.create(newResponse);
    commentForm.reset();
  }
}
