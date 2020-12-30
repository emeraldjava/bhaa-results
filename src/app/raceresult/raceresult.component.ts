import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BhaaApiService} from "../bhaa-api.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

/**
 * https://stackblitz.com/edit/material-table-responsive?file=src%2Fapp%2Ftable-basic-example.ts
 * https://stackblitz.com/edit/angular-material-table-responsive?file=app%2Fapp.component.ts
 */
@Component({
  selector: 'raceresult',
  templateUrl: './raceresult.component.html',
  styleUrls: ['./raceresult.component.css']
})
export class RaceresultComponent implements OnInit, AfterViewInit {

  results = [];
  displayedColumns = ['name','position','time'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute,private bhaaApiService: BhaaApiService) {
  }

  ngOnInit(): void {
    const race = +this.route.snapshot.paramMap.get('race');
    //this.dataSource.sort = this.sort;
    // https://stackoverflow.com/questions/53331787/how-to-fill-an-angular-material-datatable-with-data-from-a-json
    // https://stackoverflow.com/questions/53331787/how-to-fill-an-angular-material-datatable-with-data-from-a-json
    this.bhaaApiService.getRaceRresultsHttpRequest(race)
      .subscribe((response: any[]) => {
        this.results = response;
        this.dataSource = new MatTableDataSource(this.results);
      })

  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
}
