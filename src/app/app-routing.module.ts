import { NgModule } from '@angular/core';
import { NoSurveyComponent } from '../app/no-survey/no-survey.component'
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SurveyCommentComponent } from './survey-comment/survey-comment.component';

const ROUTES: Routes = [
  {path:'', component:AppComponent},
  {path:'home', component:HomeComponent},
  {path:'comment', component:SurveyCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
