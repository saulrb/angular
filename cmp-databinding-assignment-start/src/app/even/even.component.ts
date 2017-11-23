import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-component',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input('counter') counter: number;
  
  constructor() { }

  ngOnInit() {
  }

}
