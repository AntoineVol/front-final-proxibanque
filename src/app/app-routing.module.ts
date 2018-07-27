import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { SurveyCommentComponent } from './survey-comment/survey-comment.component';
import { CommentConfirmationComponent } from './comment-confirmation/comment-confirmation.component';

export const ROUTES: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'client', component:ClientComponent},
  {path:'comment', component:SurveyCommentComponent},
  {path:'commentConfirmation', component:CommentConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
