import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax-post',
  templateUrl: './ajax-post.component.html',
  styleUrls: ['./ajax-post.component.css']
})
export class AjaxPostComponent implements OnInit {
  message: string = "";
  player = {
    lastname: "",
    firstname: "",
    teamId: 1,
    position: "gardien",
    age: 0
  };

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
