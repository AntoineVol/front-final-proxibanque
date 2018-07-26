import { NgModule } from '@angular/core';
import { NoSurveyComponent } from './no-survey/no-survey.component'
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { SurveyCommentComponent } from './survey-comment/survey-comment.component';

export const ROUTES: Routes = [
  {path:'', component:AppComponent},
  {path:'client', component:ClientComponent},
  {path:'home', component:HomeComponent},
  {path:'comment', component:SurveyCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
