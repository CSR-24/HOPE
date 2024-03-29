import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.showToolbar2();
  }

}
