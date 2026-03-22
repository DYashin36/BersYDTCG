import { Component } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.html',
  styleUrls: ['./context-menu.css'],
  imports:[CommonModule]
})
export class ContextMenu {

  constructor(private contextMenuService: ContextMenuService) {}

  get state$() {
    return this.contextMenuService.state$;
  }

  close() {
    this.contextMenuService.close();
  }
}