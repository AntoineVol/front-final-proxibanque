import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Client } from '../POJO/client';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../POJO/survey';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  private model : Client;
  private identifiant : string;
  private survey : Survey;
  private errorClient : String;

  constructor(private clientService : ClientService, private surveyService : SurveyService) {
    this.survey = new Survey();
   }

  ngOnInit() {
    this.model = new Client();
    this.model.email="";
    this.model.tel="";
    this.surveyService.survey.subscribe((s) => this.survey= s); 
  }

  newC(form: NgForm) {
    let data: Client = JSON.parse(JSON.stringify(this.model));
    data.clientNumber = (Math.random()*100000000).toFixed(0);
    this.clientService.createClient(data, this.survey);
    form.resetForm;
    } 
    
    oldC(form: NgForm)  {
      let client : Client = new Client();
      this.clientService.getClient(this.identifiant, this.survey).subscribe(
        (oldClient) => {
          client = oldClient;
          if (client){
            this.clientService.createResponse(client, this.survey, false);
          }else {
            this.errorClient = "Votre identifiant n'a pas été reconnu";
          }
         },
        (error) => console.log(error)
       
      )    
      form.resetForm;
    } 

    resetErrorClient(){
      this.errorClient = "";
    }

	}

