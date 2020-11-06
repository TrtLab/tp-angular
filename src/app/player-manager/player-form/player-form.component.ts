import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  message: string = "";
  player = {
    lastname: "",
    firstname: "",
    teamId: 1,
    position: "gardien",
    age: 0
  };

  constructor(private http: HttpClient, private playerService: PlayersService) { }

  ngOnInit(): void {
  }

  postPlayer() {
    let url = "http://localhost:3000/players";

    this.playerService.createPlayer(this.player)
      .subscribe((res: any) => {
        if(res.id) {
          this.message = `Le joueur ${res.lastname} a été ajouté`; 
        }
      });
  }

}
