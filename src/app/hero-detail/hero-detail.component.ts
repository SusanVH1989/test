import { Component, OnInit,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import { Hero } from '../../Hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //@Input()
  hero : Hero;
  constructor(private routes:ActivatedRoute,
    private location:Location,
    private heroService:HeroService) {

     }

  ngOnInit() {
    this.getHero();
  }
  getHero():void{
    const id=+this.routes.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);

  }

  public goBack():void{
    this.location.back();
  }

}
