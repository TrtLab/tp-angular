import { Component, OnInit } from '@angular/core';

const SHIRTS_DIR = "assets/images/";
const SHIRTS = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  shirts : string[] = SHIRTS;
  path : string[] = []; 
  active : boolean = false;

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.shirts.length; index++) {
      this.path[index] = SHIRTS_DIR + this.shirts[index];
    }
  }

  isActive(event : any) {
    event.srcElement.className = "active";
  }
}
