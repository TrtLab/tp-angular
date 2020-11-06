import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from '../../interfaces';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  addOrEdit: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    let players = this.playersService.getAll()
      .subscribe((player) => {
        this.players = player;
      })
    ;
  }

  delete(id) {
    let playerToDelete = this.playersService.deletePlayer(id)
      .subscribe()
    ;
    location.reload();
  }



}
