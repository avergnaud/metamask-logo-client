import { Component, OnInit } from '@angular/core';

var createViewer = require('metamask-logo')

@Component({
  selector: 'app-mon-logo',
  templateUrl: './mon-logo.component.html',
  styleUrls: ['./mon-logo.component.css']
})
export class MonLogoComponent implements OnInit {

  private viewer;

  constructor() { 
    this.viewer = createViewer({
      width: 0.5,
      height: 0.5,
      followMouse: true
    })
  }

  ngOnInit() {
  }

}
