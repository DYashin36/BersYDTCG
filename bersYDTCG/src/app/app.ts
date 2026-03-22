import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from './components/board/board';
import { ContextMenu } from "./components/context-menu/context-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Board, ContextMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bersYDTCG');
}
