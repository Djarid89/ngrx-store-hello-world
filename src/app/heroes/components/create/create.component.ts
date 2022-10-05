import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import { Observable } from 'rxjs';
import {AppState} from "../../../app.state";
import {AddHero, RemoveHero} from "../../actions/hero-action";
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  @Input() detailsBtn = true;
  heroes: Observable<Hero[]>;
  counter = 0;

  constructor(private store: Store<AppState>, private router: Router) {
    this.heroes = this.store.select("heroes");
  }

  addHero(name: string, description: string) {
    this.store.dispatch(new AddHero({name: name, description: description, id: ++this.counter }));
  }

  deleteHero(indexOfHeroToBeRemoved: number) {
    this.store.dispatch(new RemoveHero(indexOfHeroToBeRemoved));
  }

  heroDetails(hero: Hero) {
    this.router.navigateByUrl('/details', { state: hero });
  }
}
