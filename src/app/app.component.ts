import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from "./movie-card/movie.model";

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

  public onActionReceiver(event: any): void {
    if(event.actionType === 'add') {
      this.mylist.push(event.movie);
      const removeIndex = this.recommendations.findIndex(movie => movie.id === event.movie.id);
      this.recommendations.splice(removeIndex, 1);
    }else if (event.actionType === 'remove') {
      this.recommendations.push(event.movie);
      const removeIndex = this.mylist.findIndex(movie => movie.id === event.movie.id);
      this.mylist.splice(removeIndex, 1);
    }
  }

}
