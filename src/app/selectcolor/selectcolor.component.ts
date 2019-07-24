import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-selectcolor',
  templateUrl: './selectcolor.component.html',
  styleUrls: ['./selectcolor.component.css']
})
export class SelectcolorComponent implements OnInit {
  color = 'blue';

  constructor() {
  }

  ngOnInit() {
  }

  changeColor(value) {
    this.color = value;
  }

}
