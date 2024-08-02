import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.css'
})
export class GiftCardComponent {
  cards = [
    { image: 'assets/images/necklace.jpg', text: 'Elegant Necklace' },
    { image: 'assets/images/ring.jpg', text: 'Stylish Ring' },
    { image: 'assets/images/bracelet.jpg', text: 'Classic Bracelet' }
  ];
}
