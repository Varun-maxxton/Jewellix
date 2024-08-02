import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    // Initialize Bootstrap carousel with a 3-second interval
    const carouselElement = document.getElementById('carouselExampleAutoplaying');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2500, // Set interval to 3 seconds
        ride: 'carousel' // Enable automatic cycling
      });
    }
  }
}
