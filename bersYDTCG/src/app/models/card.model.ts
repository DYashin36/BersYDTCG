import { Ability } from "./ability.model";
import { Action } from "./action.model";
import { CardClass } from "./CardClass.model";
import { CardElement } from "./CardElement.model";

export interface Card {
  id: number;
  cardId:string;
  name: string;
  cardClass: CardClass;
  cardElement: CardElement;
  hitPoints: number;
  movements: number;
  hitsPower: number[];
  isUnique: boolean;
  isOpen: boolean;

  actions: Action[];
  abilities: Ability[];
}