import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

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
  @Input() addOrEdit: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postPlayer() {
    let url = "http://localhost:3000/players";

    this.http.post(url, this.player)
      .subscribe((res: any) => {
        if(res.id) {
          this.message = `Le joueur ${res.lastname} a été ajouté`; 
        }
      });
  }

}
