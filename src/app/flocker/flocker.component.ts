import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayersService } from '../services/players.service'

const BADGES_DIR = "assets/images/";
const BADGES = ["badge1.jpg", "badge2.png", "badge3.jpg"];

@Component({
  selector: 'app-flocker',
  templateUrl: './flocker.component.html',
  styleUrls: ['./flocker.component.css']
})
export class FlockerComponent implements OnInit {
  flockPart : boolean = false;
  path : string[] = [];
  playersLastName : string[] = this.playersService.getPlayersLastname();
  playersNum : string[] = this.playersService.getPlayersNum();
  playersList : string[] = [];
  flockText : string = "";
  @Output() changeState : EventEmitter<string | number> = new EventEmitter();

  constructor(private playersService : PlayersService) {  }

  ngOnInit(): void {
    for (let index = 0; index < BADGES.length; index++) {
      this.path[index] = BADGES_DIR + BADGES[index];
    }

    for (let index = 0; index < this.playersLastName.length; index++) {
      this.playersList[index] = this.playersNum[index] + ': ' + this.playersLastName[index]; 
    }
  }

  showFlock() {
    this.flockPart = true;

  }

  selected(event) {
    console.log(event.srcElement.className);
  }

  flockName(event) {
    this.flockText = event.target.value;
    console.log(this.flockText);
  }

}
