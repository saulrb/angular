import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean = false;
  toggles = [];

  toggle(){
    if (!this.show) {
      this.show = true;
    }else{
      this.show = false;
    }
    this.toggles.push(new Date());
  }

  getColor(i){
    return i >= 4 ? "blue" : "none";
  }
}
