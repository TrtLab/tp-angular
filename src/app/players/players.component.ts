import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players : Player[] = [];
  numInjuredPlayers : number = 0;

  constructor() { }

  ngOnInit(): void {
    let p1 : Player = { 
      firstname: "Cristiano",
      lastname: "Ronaldo",
      num: 7,
      injured: false
    };
    let p2 : Player = { 
      firstname: "Lionel",
      lastname: "Messi",
      injured: true
    };
    let p3 : Player = { 
      firstname: "Antoine",
      lastname: "Griezmann",
      injured: false
    };

    this.players.push(p1);
    this.players.push(p2);
    this.players.push(p3);

    this.onChange();
  }

  onChange(event ?: any){
    if(event) console.log(event);
    // Met à jour le nombre de bléssés
    this.numInjuredPlayers = this.players.filter(p => p.injured).length;
  }

}
