import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Client } from '../POJO/client';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../POJO/survey';
import { Response } from '../POJO/response';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 // @Output() onCreate: EventEmitter<Client>;
 // @Output() onSave : EventEmitter<Client>;
  private model : Client;
  private identifiant : string;
  private survey : Survey;

  constructor(private clientService : ClientService, private surveyService : SurveyService) { }

  ngOnInit() {
    this.model = new Client();
    this.surveyService.survey.subscribe((s) => this.survey= s); 
  }

  newC(form: NgForm) {
    let data: Client = JSON.parse(JSON.stringify(this.model));
    data.clientNumber = (Math.random()*100000000).toFixed(0);
    this.clientService.createClient(data, this.survey);
    form.resetForm;
    } 
    
    oldC(form: NgForm)  {
      let client : Client;
      this.clientService.getClient(this.identifiant, this.survey);
      
      form.resetForm;
    } 

	}

