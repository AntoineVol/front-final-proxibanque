import { NgModule } from '@angular/core';
import { NoSurveyComponent } from '../app/no-survey/no-survey.component'
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {path:'', component:AppComponent},
  {path:'home', component:NoSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
