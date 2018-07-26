import { Injectable } from '@angular/core';
import { Response } from '../POJO/response';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private apiUrl:string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl= ENV.ApiUrl + "response"
    }

  create(response : Response) : Observable<Response>{
    console.log("Passage par create response : " + response);
    let result = new Subject<Response>();
    this.httpClient.post<Response>(this.apiUrl, response)
			.subscribe((newResponse) => {
				// Si HTTP POST success.
				result.next(newResponse);
				result.complete();
			}, (response: HttpErrorResponse) => {
				// Sinon si erreur.
				result.error(response.message);
			});
    return result;

  }
}
