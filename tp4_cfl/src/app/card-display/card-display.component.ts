import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './../card.service';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css'
})
export class CardDisplayComponent {
  constructor(private cardService: CardService) {}

  get cards() {
    return this.cardService.getCards;
  }
}
