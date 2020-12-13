import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() 
  toggleSidenav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggleSidenav.emit("toggleSideNav");
  }

}
