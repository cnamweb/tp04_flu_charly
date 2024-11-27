import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './../card.service';
import { Card } from './../models/card';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css'
})
export class CardDisplayComponent {
  constructor(private cardService: CardService) {
    cardService.addCard(new Card('Charly', '6548108459620315', '12/25', '123'));
    cardService.addCard(new Card('Paolo',  '6969696969696969', '12/26', '456'));
    cardService.addCard(new Card('Tom',   '1234567890123456', '12/27', '789'));
  }

  deleteCard(card: Card) {
    this.cardService.deleteCard(card);
  }

  get cards() {
    return this.cardService.getCards;
  }
}
