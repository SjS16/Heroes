import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Mr. Fairly Nice' },
      { id: 13, name: 'Banes Good Twin' },
      { id: 14, name: 'Bob Ross' },
      { id: 15, name: 'Batman' },
      { id: 16, name: 'Loki on a Good Day' },
      { id: 17, name: 'Superwoman' },
      { id: 18, name: 'Wolverine' },
      { id: 19, name: 'David Beckhams Right Foot' },
      { id: 20, name: 'Spiderman' },
      { id: 21, name: 'Jimmy' },
      { id: 22, name: 'Dexter' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}