import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { RaceresultComponent } from './raceresult/raceresult.component';

const routes: Routes = [
  //{ path: 'race' , component: RaceComponent},
  { path: 'raceresult/:race' , component: RaceresultComponent},
  { path: '',  redirectTo: '/race', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
