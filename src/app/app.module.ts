import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NotifierModule } from 'angular-notifier';
import { NgToastModule } from 'ng-angular-popup'
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
// import { NavigationModule } from '@progress/kendo-angular-navigation';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
interface NgxSpinnerConfig {
  type?: string;
}
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
    NgToastModule,FormsModule, GridModule, BrowserAnimationsModule,
    NavigationModule,
    ButtonsModule,
    InputsModule,
    NgxSpinnerModule
    // NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
