import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input()
  public movie: Movie;

  @Input()
  public action: string;

  @Output()
  public onAction = new EventEmitter();

  public onActionClick(actionType: string): void {
    this.onAction.emit({movie: this.movie, actionType:actionType})
  }

}
