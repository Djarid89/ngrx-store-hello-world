import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UpdateHero } from '../../actions/hero-action';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  private hero: Hero;
  name: string;
  description: string;

  constructor(private router:Router, private location: Location, private store: Store<AppState>) {
    this.hero = this.router.getCurrentNavigation()?.extras.state as Hero;
    this.name = this.hero.name;
    this.description = this.hero.description;
  }

  updateHero(): void {
    this.store.dispatch(new UpdateHero({ id: this.hero.id, name: this.name, description: this.description }));
  }

  back(): void {
    this.location.back();
  }
}
