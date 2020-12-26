import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';

@Component({
  selector: 'race-list',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  posts = [];

  constructor(private wpApiPosts: WpApiPosts) {
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts() {
    this.wpApiPosts.getList()
      .toPromise()
      .then( response => {
        let json: any = response.json();
        this.posts = json;
      });
  }

}
