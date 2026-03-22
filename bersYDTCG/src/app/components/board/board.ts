import { Component } from '@angular/core';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: 'board.html',
  styleUrls: ['board.css'],
  imports: [Card, CommonModule]
})
export class Board {

  rows = 6;
  cols = 5;

  grid = Array(this.rows).fill(null).map(() =>
    Array(this.cols).fill(null)
  );

  getImagePath(row: number, col: number): string {
    return 'assets/6_02.jpg';
  }
}