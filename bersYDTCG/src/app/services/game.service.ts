import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:8080/game';

  constructor(private http: HttpClient) {}

  getStartField(): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/getStartField`, {
      
    });
  }
}