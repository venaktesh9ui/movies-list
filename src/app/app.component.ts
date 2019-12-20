import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public mylist = [];
  public recommendations = [];

  constructor(private http: HttpClient) {}

  public ngOnInit() : void {
    this.http.get('assets/data/movies.json').subscribe((response:any) => {
      this.mylist = response.mylist;
      this.recommendations = response.recommendations;
    });
  }

}
