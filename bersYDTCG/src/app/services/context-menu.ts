import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  private _state = new BehaviorSubject<{
    visible: boolean,
    image: string | null
  }>({
    visible: false,
    image: null
  });

  state$ = this._state.asObservable();

  open(image: string) {
    this._state.next({
      visible: true,
      image
    });
  }

  close() {
    this._state.next({
      visible: false,
      image: null
    });
  }
}