import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { RaceresultComponent } from './raceresult/raceresult.component';

const routes: Routes = [
  { path: '',  redirectTo: '/races', pathMatch: 'full' },
  { path: 'races' , component: RaceComponent},
  { path: 'raceresult/:race' , component: RaceresultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
