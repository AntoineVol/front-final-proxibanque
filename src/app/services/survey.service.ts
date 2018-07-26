import { Injectable } from '@angular/core';
import { Survey } from '../POJO/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }

  public read(): Survey{

    return null;
  }
}
