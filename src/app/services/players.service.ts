import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  getAll(): any {
    return this.http.get('http://localhost:3000/players');
  }

  deletePlayer(id: number) {
    return this.http.delete('http://localhost:3000/players/' + id)
  }
}
