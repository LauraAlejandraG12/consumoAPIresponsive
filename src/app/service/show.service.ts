import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episodes } from '../interface/episodes';
import { Show } from '../interface/show';
import { Cast } from '../interface/cast';
import { forkJoin, of, tap } from 'rxjs';

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
    if(!navigator.onLine){
    const data = localStorage.getItem('show');
    if(data){
      return of(JSON.parse(data));
    }
  }

  return this.http.get<Show>(this.urlShow).pipe(
    tap(data => {
      localStorage.setItem('show', JSON.stringify(data));
    })
  );
}

  getEpisodes(){
     if(!navigator.onLine){
    const data = localStorage.getItem('episodes');
    if(data){
      return of(JSON.parse(data));
    }
  }

  return this.http.get<Episodes[]>(this.urlEpisodes).pipe(
    tap(data => {
      localStorage.setItem('episodes', JSON.stringify(data));
    })
  );
}

  getCast(){
    if(!navigator.onLine){
    const data = localStorage.getItem('cast');
    if(data){
      return of(JSON.parse(data));
    }
  }

  return this.http.get<Cast[]>(this.urlCast).pipe(
    tap(data => {
      localStorage.setItem('cast', JSON.stringify(data));
    })
  );
}

}
