import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  paths : string[] = [
    "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg", 
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", 
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  ];
  i : number = 1;
  image : string = this.paths[0];

  constructor() { 
    setInterval(() => {
       this.carousel();
    }, 2000)
  }

  carousel(){
    if(this.i == this.paths.length){
      this.i = 0;
    }   
    this.image = this.paths[this.i]; 
    this.i++;
  }

}
