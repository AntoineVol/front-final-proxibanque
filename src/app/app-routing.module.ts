import { NgModule } from '@angular/core';
import { NoSurveyComponent } from './no-survey/no-survey.component'
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';

export const ROUTES: Routes = [
  {path:'', component:AppComponent},
  {path:'home', component:NoSurveyComponent},
  {path:'client', component:ClientComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
