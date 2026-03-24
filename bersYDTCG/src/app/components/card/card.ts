import { Component, Input } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu';
import { CommonModule } from '@angular/common';
import { Action } from '../../models/action.model';
import { Ability } from '../../models/ability.model';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: 'card.html',
  styleUrls: ['card.css'],
  imports: [CommonModule]
})
export class Card {
  @Input() cell: any;
  @Input() row!: number;
  @Input() isFlipped = false;

  rotation = 0;
  private actionUsed = false;

  constructor(private contextMenuService: ContextMenuService) {}

  get totalRotation() {
    return this.rotation + (this.isFlipped ? 180 : 0);
  }

  get image(): string {
    if (!this.cell) return '';
    return `assets/${this.cell.cardId}.jpg`;
  }

  private rotateOnce() {
    if (this.actionUsed) return;
    this.rotation += 90;
    this.actionUsed = true;
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    if (!this.cell) return;

    const actions: Action[] = this.cell.actions ?? [];
    const abilities: Ability[] = this.cell.abilities ?? [];

    this.contextMenuService.open(
      this.image,
      this.row,
      actions,
      abilities,
      () => this.rotateOnce(),
      (ability) => this.activateAbility(ability)
    );
  }
  private activateAbility(ability: Ability) {
    console.log('Ability selected:', ability);

    const cellsToHighlight = this.getCellsInRange(
      ability.range,
      ability.isContact
    );

    this.highlightCells(cellsToHighlight);
  }

  // Заглушка — ты привяжешь к своему полю
  private getCellsInRange(range: number, isContact: boolean) {
    // TODO: заменить на реальную логику поля
    // тут должна быть проверка:
    // - расстояние <= range
    // - если isContact → только занятые
    // - если !isContact → только свободные

    return [];
  }

  private highlightCells(cells: any[]) {
    
    console.log('Highlight:', cells);
  }
}