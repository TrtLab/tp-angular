import { Component, OnInit } from '@angular/core';

const NUMS: string[] = ['0','1','2','3','4','5','6','7','8','9'];
const EMPTY_STR: string[] = ['','','','','',''];
const BOXES: string[] = ['_','_','_','_','_','_'];
const CODE_SIZE: number = 6;

@Component({
  selector: 'app-virtualkb',
  templateUrl: './virtualkb.component.html',
  styleUrls: ['./virtualkb.component.css']
})

export class VirtualkbComponent implements OnInit {
  private _keys: string[] = [...NUMS, ...EMPTY_STR];
  keys: string[] = [];
  boxes: string[] = [...BOXES];
  inputCode: string = "";

  constructor() { }

  ngOnInit(): void {
    this.keys = [...NUMS, ...EMPTY_STR].map(() => this.pickValue(this._keys))
  }

  selectKey(event: any) {
    let t = event.target.innerText;

    if (t && this.inputCode.length < CODE_SIZE) {
      this.boxes[this.inputCode.length] = 'x';
      this.inputCode += t;
    }
  }

  log() {
    console.log(this.inputCode);
  }

  pickValue(arr) {
    var max = arr.length;
    return arr.splice(this.randomIndex(max), 1)[0];
  }

  randomIndex(max) {
      // renvoie une valeur comprise entre 0 et max
      return Math.floor(Math.random() * max);
  }

}
