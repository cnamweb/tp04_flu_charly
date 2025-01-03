import { Injectable, signal } from '@angular/core';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
    private cards = signal<Card[]>([]);
    
    constructor() { }
    
    addCard(card: Card) {
        this.cards.update(cards => [...cards, card]);
    }

    deleteCard(card: Card) {
        this.cards.update(cards => cards.filter(c => c !== card));
    }
    
    get getCards() {
        return this.cards;
    }
}