import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-component',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input('counter') counter: number;

  constructor() { }

  ngOnInit() {
  }

}
