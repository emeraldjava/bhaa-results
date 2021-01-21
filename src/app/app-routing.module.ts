import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from "./race/race.component";
import { RunnerComponent } from "./runner/runner.component";
import { RaceresultComponent } from "./raceresult/raceresult.component";

const routes: Routes = [
  {
    path: "",
    component: RaceComponent
  },
  {
    path: "runner/:id",
    component: RunnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
