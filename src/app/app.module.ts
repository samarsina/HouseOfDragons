import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import{ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NotifierModule } from 'angular-notifier';
import { NgToastModule } from 'ng-angular-popup'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    ReactiveFormsModule,
    NotifierModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
