import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStart = new EventEmitter <{counter: number }>();
  @Output() gameStop = new EventEmitter <{counter: number}>();

  constructor() { }
  counterValue = 0

  ngOnInit() {
  }

  onGameStart(){
    this.gameStart.emit ({counter:this.counterValue});
  }

  onGameStop(){
    this.gameStop.emit({counter:this.counterValue})
  }

}
