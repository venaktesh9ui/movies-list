import { Component, Input } from '@angular/core';
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

}
