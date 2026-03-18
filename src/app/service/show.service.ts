import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episodes } from '../interface/episodes';
import { Show } from '../interface/show';
import { Cast } from '../interface/cast';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  url:string;
  urlShow: string;
  urlEpisodes: string;
  urlCast: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://api.tvmaze.com';
    this.urlShow = 'https://api.tvmaze.com/shows/35352';
    this.urlEpisodes = 'https://api.tvmaze.com/shows/35352/episodes';
    this.urlCast = 'https://api.tvmaze.com/shows/35352/cast';
  }

  getShow(){
    return this.http.get<Show>(this.urlShow);
  }
  getEpisodes(){
    return this.http.get<Episodes[]>(this.urlEpisodes);
  }

  getCast(){
    return this.http.get<Cast[]>(this.urlCast);
  }
}
