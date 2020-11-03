import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  price : number = 120;
  badgePrice : number = 10;
  flockPrice : number = 10;
  total : number;

  constructor() { }

  ngOnInit(): void {
  }

  quantity(event) {
    this.total += event.target.value;
    console.log("coucou")
  }

}
