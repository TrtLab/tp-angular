import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  content : string = "Non";
  checked : boolean = false;
  backgroundColor : string = "grey";

  constructor() { }

  onSwitch(event : any){
    let target = event.target;
    this.checked ? target.innerText = "Non" : target.innerText = "Oui";
    this.checked = !this.checked;
    let value = target.innerText;
    if(value === "Oui"){
      this.backgroundColor = "green";
      console.log(1);
    } 
    else {
      this.backgroundColor = "grey";
      console.log(2);
    }
  }
}
