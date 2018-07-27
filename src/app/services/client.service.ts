import { Injectable } from '@angular/core';
import { Client } from '../POJO/client';
import { environment as ENV } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private ApiUrl: string;

  constructor(private httpClient: HttpClient,  private router : Router) {
    this.ApiUrl = ENV.ApiUrl +"/client";
   }


  createClient (client : Client){

	  this.httpClient.post<Client>(this.ApiUrl, client)
			.subscribe((newClient) => {
				// Si HTTP POST success.
        console.log(newClient);
        this.router.navigateByUrl('home');
			}, (error) => {
				// Sinon si erreur.
				console.log(error);
			});
  }

  createResponse (identifiant : String){

  }


}
