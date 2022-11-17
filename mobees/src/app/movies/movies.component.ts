import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList: MovieModel[] = [];

  constructor(private moviesService: MoviesService) {
    this.getMovieList();
  }

  ngOnInit(){};

  getMovieList = () => {
    this.moviesService.getMovieList().subscribe((data: MovieModel[]) => {
      this.moviesList = data;
      console.log(this.moviesList);
    })
  }
}

