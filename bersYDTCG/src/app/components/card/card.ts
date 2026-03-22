import { Component, Input } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: 'card.html',
  styleUrls: ['card.css'],
  imports:[CommonModule]
})
export class Card {

  @Input() image!: string;
  @Input() row!: number;
  @Input() isFlipped = false;

  rotation = 0;

  get totalRotation() {
    return this.rotation + (this.isFlipped ? 180 : 0);
  }

  constructor(private contextMenuService: ContextMenuService) {}

  // onClick() {
  //   this.rotation = (this.rotation + 90) % 360;
  // }

  onRightClick(event: MouseEvent) {
  event.preventDefault();
  if (this.row >= 3) {
    this.contextMenuService.open(this.image);
  }
  }
}