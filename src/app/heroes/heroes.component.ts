import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Hero';
import {HEROES} from '../../mock-heroes'
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero:Hero;
  constructor(private heroService:HeroService) { 
    this.heroService=heroService;
  }

  ngOnInit() {
  this.heroService.getHeroes().subscribe(heroes=> this.heroes=heroes);
  }
  onSelectHero(hero:Hero): void{
    this.selectedHero = hero;
  }

  

}
