import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = 0;
  fnCounter = undefined;

  onGameStarted(){
    this.fnCounter = setInterval(()=>{
      this.counter = this.counter + 1
    },1000)
  }
  onGameStopped(){
    this.counter = 0
    clearInterval(this.fnCounter);
  }

}
