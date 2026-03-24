import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: 'board.html',
  styleUrls: ['board.css'],
  imports: [Card, CommonModule]
})
export class Board implements OnInit {

  grid: any[][] = [];

  game?: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getStartField().subscribe({
      next: (data: Game) => {
        this.game = data;

        this.grid = data.field;

        console.log('Получены данные:', data);
      },
      error: (err) => {
        console.error('Ошибка при загрузке данных:', err);
      }
    });
  }
}