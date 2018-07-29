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
  private apiUrlClientNumero:string;
  private oldClient : Client;

  constructor(private httpClient: HttpClient,  private router : Router) {
    this.apiUrlClient = ENV.ApiUrl +"client";
    this.apiUrlResponse = ENV.ApiUrl +"response";
    this.apiUrlClientNumero = ENV.ApiUrl +"client"+"/numero";

   }

  createClient (client : Client, survey : Survey){
	  this.httpClient.post<Client>(this.apiUrlClient, client)
			.subscribe((newClient) => {
				// Si HTTP POST success.   
        this.createResponse(newClient, survey);
			}, (error) => {
				// Sinon si erreur.
				console.log(error);
			});
  }

  createResponse (client : Client, survey : Survey){
    let response : Response = new Response();
    response.newClient = true;
    response.positiveResponse = true;
    response.survey = survey; 
    response.client = client;
    this.httpClient.post<Response>(this.apiUrlResponse, response).subscribe(
        (s) => {
          console.log(s);
          this.router.navigateByUrl('messageConfirmation');
        } ,     
       (error) => console.log(error)
    )

  }


  getClient(identifiant : string, survey : Survey) : Observable<Client>  {
    
    return this.httpClient.get<Client>(this.apiUrlClientNumero + `/${identifiant}`);
 
  }


}
