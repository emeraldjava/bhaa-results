import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RaceComponent } from './race/race.component';
import { environment } from './../environments/environment';
import { BhaaApiService } from './bhaa-api.service';
//import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [BhaaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
