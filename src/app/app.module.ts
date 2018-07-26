import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule }   from '@angular/forms';
>>>>>>> 799e0ab2bd72f05a4790ced45c538741fea8a1bc
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoSurveyComponent } from './no-survey/no-survey.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ClientComponent } from './client/client.component';
import { SurveyService } from './services/survey.service';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
import { SurveyCommentComponent } from './survey-comment/survey-comment.component';
>>>>>>> 799e0ab2bd72f05a4790ced45c538741fea8a1bc

@NgModule({
  declarations: [
    AppComponent,
    NoSurveyComponent,
    SurveyComponent,
    HomeComponent,
<<<<<<< HEAD
    ClientComponent,
    
=======
    SurveyCommentComponent
>>>>>>> 799e0ab2bd72f05a4790ced45c538741fea8a1bc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule

=======
    HttpClientModule,
    FormsModule      
>>>>>>> 799e0ab2bd72f05a4790ced45c538741fea8a1bc
  ],
  providers: [SurveyService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
