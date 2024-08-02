import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  cards = [
    {
        image: 'assets/images/card1.jpg',
        title: '',
        text: 'This is card 1 description.',
        link: '#'
    },
    {
        image: 'assets/images/card2.jpg',
        title: 'Card 2',
        text: 'This is card 2 description.',
        link: '#'
    },
    {
        image: 'assets/images/card3.jpg',
        title: 'Card 3',
        text: 'This is card 3 description.',
        link: '#'
    },
    {
        image: 'assets/images/card4.jpg',
        title: 'Card 4',
        text: 'This is card 4 description.',
        link: '#'
    }
];
}
