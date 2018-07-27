import { Injectable } from '@angular/core';
import { Client } from '../POJO/client';
import { environment as ENV } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { Response } from '../POJO/response';
import { Survey } from '../POJO/survey';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrlClient:string;
  private apiUrlResponse:string;

  constructor(private httpClient: HttpClient,  private router : Router) {
    this.apiUrlClient = ENV.ApiUrl +"client";
    this.apiUrlResponse = ENV.ApiUrl +"response"
   }

  createClient (client : Client, survey : Survey){
	  this.httpClient.post<Client>(this.apiUrlClient, client)
			.subscribe((newClient) => {
				// Si HTTP POST success.
        console.log(" newClient " + newClient);
        let res : Response = new Response;
        res.newClient = true;
        res.positiveResponse = true;
        res.survey = survey; 
        res.client = newClient;      
        this.createResponse(res);
        this.router.navigateByUrl('messageConfirmation');
			}, (error) => {
				// Sinon si erreur.
				console.log(error);
			});
  }

  createResponse (response : Response){
    console.log("response " + response.survey);
    this.httpClient.post<Response>(this.apiUrlResponse, response).subscribe(
      (s) => console.log(s),
      (error) => console.log(error)
    )

  }


}
