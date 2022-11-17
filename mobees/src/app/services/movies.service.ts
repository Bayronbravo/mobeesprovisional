import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';

@Injectable({
    providedIn: 'root'
}
)
export class MoviesService {

    constructor(
        private httpClient: HttpClient
    ) { }

    public getMovieList(): Observable<MovieModel[]> {
        return this.httpClient.get<MovieModel[]>('https://movapitwk.herokuapp.com/api/movies');
    }

}

