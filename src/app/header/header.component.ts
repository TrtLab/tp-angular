import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title : string = "header component";
  altText : string = "Photo d'un loup";
  srcPath : string = "https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/a80b245d-0a52-4d14-83d4-3f7e1343a792/1200x680_loup_boris_roessler_picture_alliance_getty.jpg";
  authenticated : boolean = false;
  options : string[] = ["red", "green", "orange"];
  borderColor : string = "black"

  constructor() {
    this.updateUI();
  }

  updateUI() {
    setTimeout(() => {
      console.log("Update UI");
      this.title += " updated !";
      this.authenticated = !this.authenticated;
      this.options.push("New option");
    }, 1000)
  }

  onChange(event : any) {
    let value : string = event.target.value;
    console.log(value);

    if(value === "New option"){
      this.borderColor = "yellow"
    }
    else {
      this.borderColor = value;
    }
    
  }

}
