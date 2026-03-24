import { Component } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu';
import { CommonModule } from '@angular/common';
import { Action } from '../../models/action.model';
import { Ability } from '../../models/ability.model';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  templateUrl: './context-menu.html',
  styleUrls: ['./context-menu.css'],
  imports: [CommonModule]
})
export class ContextMenu {
  constructor(private contextMenuService: ContextMenuService) {}

  get state$() {
    return this.contextMenuService.state$;
  }

  close() {
    this.contextMenuService.close();
  }

  runAction(action: Action) {
    this.state$.subscribe(state => {
      state.onAction?.(action);
    }).unsubscribe();

    this.close();
  }

  runAbility(ability: Ability) {
    this.state$.subscribe(state => {
      state.onAbility?.(ability);
    }).unsubscribe();

    this.close();
  }
}