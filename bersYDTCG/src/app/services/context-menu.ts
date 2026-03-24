import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Action } from '../models/action.model';
import { Ability } from '../models/ability.model';

export interface ContextMenuState {
  visible: boolean;
  image: string | null;
  row: number | null;

  actions: Action[];
  abilities: Ability[];

  onAction?: (action: Action) => void;
  onAbility?: (ability: Ability) => void;
}

@Injectable({ providedIn: 'root' })
export class ContextMenuService {
  private stateSubject = new BehaviorSubject<ContextMenuState>({
    visible: false,
    image: null,
    row: null,
    actions: [],
    abilities: [],
  });

  state$ = this.stateSubject.asObservable();

  open(
    image: string,
    row: number,
    actions: Action[] = [],
    abilities: Ability[] = [],
    onAction?: (action: Action) => void,
    onAbility?: (ability: Ability) => void
  ) {
    this.stateSubject.next({
      visible: true,
      image,
      row,
      actions,
      abilities,
      onAction,
      onAbility,
    });
  }

  close() {
    this.stateSubject.next({
      visible: false,
      image: null,
      row: null,
      actions: [],
      abilities: [],
    });
  }
}