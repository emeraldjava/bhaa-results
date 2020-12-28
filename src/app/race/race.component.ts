import { Component, OnInit } from '@angular/core';
import { BhaaApiService } from './../bhaa-api.service';

@Component({
  selector: 'race-list',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races = [];

  constructor(private bhaaApiService: BhaaApiService) {
    this.getRaces();
  }

  ngOnInit(): void {
  }

  getRaces() {
    this.bhaaApiService.getRacesHttpRequest()
      .toPromise()
      .then( response => {
        let json: any = response;
        this.races = json;
      });
  }

}
