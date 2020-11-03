import { Component } from '@angular/core';

@Component({
  selector: 'app-virtualkb',
  templateUrl: './virtualkb.component.html',
  styleUrls: ['./virtualkb.component.css']
})
export class VirtualkbComponent {
  keys : string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", " ", " ", " ", " ", " "];
  values : string[] = ["_", "_", "_", "_", "_", "_"];
  completed : boolean = false;

  constructor() { }

  insertValue(event : any){
    for (let index = 0; index < 6; index++) {
      let value = event.target.innerText;
      if(value !== " "){
        this.values[index] = value;
      console.log(value + " => "+ index); 
      }
    }
    this.completed = true;
  }
}
