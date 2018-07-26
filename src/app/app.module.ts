import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoSurveyComponent } from './no-survey/no-survey.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { SurveyService } from './services/survey.service';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NoSurveyComponent,
    SurveyComponent,
    HomeComponent,
    ClientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [SurveyService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
