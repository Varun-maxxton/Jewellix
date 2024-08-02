import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';
import { IRates } from '../IRates';
import { IRateItems } from '../irate-items';

@Component({
  selector: 'app-api-fetch',
  templateUrl: './api-fetch.component.html',
  styleUrl: './api-fetch.component.css'
})
export class ApiFetchComponent implements OnInit{
  goldPriceData$!: IRates[];
  itemData$!: IRateItems[];

  constructor(private goldPriceService: RateService) {}

  ngOnInit(): void {
    // this.goldPriceService.getGoldPrice().subscribe((data)=> {
    //   this.goldPriceData$ = data;
    // });
    this.goldPriceService.getGoldPrice().subscribe((data) => {
      this.itemData$ = data.items;
    });
   
  }
}


