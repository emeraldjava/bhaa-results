import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RaceComponent } from './race/race.component';
import { environment } from './../environments/environment';
import { BhaaApiService } from './bhaa-api.service';
import { MaterialModule } from './material/material.module';
import { RouteModule } from './route.module';
import { RaceresultComponent } from './raceresult/raceresult.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { RunnerComponent } from './runner/runner.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    RaceresultComponent,
    RunnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    RouteModule,
    NgxGoogleAnalyticsModule.forRoot('UA-3869538-1'),
    NgxGoogleAnalyticsRouterModule,//.forRoot({ include: [ '/*' ] })
    BrowserAnimationsModule
  ],
  providers: [BhaaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
