import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../../Hero'


@Component({
  selector: 'app-form-example-1',
  templateUrl: './form-example-1.component.html',
  styleUrls: ['./form-example-1.component.css']
})
export class FormExample1Component  {
heroes=['william','David','Samuel','Don']
  addHero(value:string){
    if(value){
    this.heroes.push(value);
    }
  }
}
