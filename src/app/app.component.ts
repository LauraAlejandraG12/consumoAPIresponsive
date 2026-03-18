import { Component, OnDestroy, OnInit } from '@angular/core';
import { Episodes } from './interface/episodes';
import { Show } from './interface/show';
import { map, Subscription } from 'rxjs';
import { ShowService } from './service/show.service';
import { Cast } from './interface/cast';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  show: Show;
  cast: Cast[] = [];
  episodes: Episodes[] = [];
  private subscription: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;

  constructor(private showService: ShowService, private translocoService: TranslocoService ) { }

  ngOnInit(): void {
    this.subscription = this.showService
      .getShow()
      .subscribe({
        next: (data) => {
          this.show = data;
          console.log('Show cargado');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Proceso completado');
        }
      });

    this.subscription2 = this.showService
      .getEpisodes()
      .pipe(
        map((episodes) => {
          return episodes.map((episode) => {
            return {
              id: episode.id,
              url: episode.url,
              name: episode.name,
              season: episode.season,
              number: episode.number,
              airdate: episode.airdate,
              airtime: episode.airtime,
              runtime: episode.runtime,
              image: episode.image,
              summary: episode.summary

            };
          });
        }),
      )
      .subscribe({
        next: (data) => {
          this.episodes = data;
          console.log('Episodio cargado');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Proceso completado')
        },
      });

    this.subscription3 = this.showService
      .getCast()
      .pipe(
        map((cast) => {
          return cast.map((cast) => {
              return {
                person: {
                url: cast.person.url,
                name: cast.person.name,
                country: {
                name: cast.person.country.name,
                timezone: cast.person.country.timezone
                },
                birthday: cast.person.birthday,
                image: {
                medium: cast.person.image.medium
                }
              }
            };
          });
        }),
      )
      .subscribe({
        next: (data) => {
          this.cast = data;
          console.log('cast cargado');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Proceso completado')
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  cambiarIdioma() {
  const idiomaActual = this.translocoService.getActiveLang();

  if (idiomaActual === 'es') {
    this.translocoService.setActiveLang('en');
  } else {
    this.translocoService.setActiveLang('es');
  }
}
}
