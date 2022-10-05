// hero-reducer.ts
import {Hero} from "../models/hero";
import {ADD_HERO, AddHero, REMOVE_HERO, RemoveHero, UpdateHero, UPDATE_HERO} from "../actions/hero-action";
import {Action, INIT} from "@ngrx/store";

const initialState : Hero[] = [{
  name: "My Initial Hero",
  description: "This is my Initial Hero",
  id: 0
}]

export function heroReducer (state : Hero[] = [], action: Action): Hero[] {
  const newState = [...state]
  switch(action.type) {
    case ADD_HERO:
      return [...state, (action as AddHero).heroToBeAdded]
    case REMOVE_HERO:
      newState.splice((action as RemoveHero).indexOfHeroToBeRemoved,1)
      return newState
    case UPDATE_HERO:
      const heroFindedIndex = newState.findIndex((hero: Hero) => hero.id === (action as UpdateHero).hero.id);
      if(heroFindedIndex !== -1) {
        newState[heroFindedIndex] = { ...(action as UpdateHero).hero };
      }
      return newState
    case INIT:
      return initialState
    default:
      throw Error(`The action type "${action.type}" is not implemented`)
  }
}
