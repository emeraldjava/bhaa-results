import { Component, OnInit } from '@angular/core';
import { BhaaApiService } from './../bhaa-api.service';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {

  results = [];
  displayedColumns = ['name','position','time'];
  dataSource: MatTableDataSource<any>;

  constructor(private bhaaApiService: BhaaApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const runner = +this.route.snapshot.paramMap.get('runner');
    this.bhaaApiService.getRunnerResults(7713)
      .subscribe((response: any[]) => {
        this.results = response;
        this.dataSource = new MatTableDataSource(this.results);
      })
  }

}
