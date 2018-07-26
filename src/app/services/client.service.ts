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
  private apiUrl: string;

  constructor(private httpClient: HttpClient,  private router : Router) {
    this.apiUrl = ENV.apiUrl;
   }


  createClient (client : Client){

	  this.httpClient.post<Client>(this.apiUrl, client)
			.subscribe((newClient) => {
				// Si HTTP POST success.
        console.log(newClient);
        this.router.navigateByUrl('home');
			}, (response: HttpErrorResponse) => {
				// Sinon si erreur.
				console.log(response.message);
			});
  }

  createResponse (identifiant : String){

  }


}
