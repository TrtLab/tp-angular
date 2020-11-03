import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersLastname : string[] = ["Ronaldo", "Messi", "Griezmann"]
  private playerNum : string[] = ["7", "10", "14"]

  constructor() { }

  getPlayersLastname() {
    return this.playersLastname;
  }

  getPlayersNum(){
    return this.playerNum;
  }
}
