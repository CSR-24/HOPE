import { AppService } from './../../services/app.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() 
  toggleSidenav = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.toolbar2Displayed.subscribe((isDisplayed) => {
      this.showToolbar_2 = isDisplayed;
    });
  }

  @Input() showToolbar_2: boolean = true;

  toggle() {
    this.toggleSidenav.emit("toggleSideNav");
  }

  searchHandler(query: string) {
    console.log(query);
  }
  
}
