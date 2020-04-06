import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessagesService } from './messages.service';

@Injectable({ providedIn: 'root' })
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetch hero id${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessagesService) { }
}
