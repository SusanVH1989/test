import { Injectable } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
import {MessageService} from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { 
    
  }

  public getHeroes(): Observable<Hero[]>{
    this.messageService.add("Retrieving hero");
    return of(HEROES);
  }

  public getHero(id:number):Observable<Hero>{
    this.messageService.add("Fetching Hero with id"+id);
    return of(HEROES.find(hero=>hero.id== id ));
  }
}
