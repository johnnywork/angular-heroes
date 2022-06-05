import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable,  of , map} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'http://localhost:8080/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    }

  getHeroes(): Observable<Hero[]> {
    let heroes = this.http.get<Hero[]>(this.heroesUrl+'/all');
    this.log('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    let hero = this.http.get<Hero>(this.heroesUrl+'/'+id);
    this.log(`HeroService: fetched hero id=${id}`);
    return hero;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

