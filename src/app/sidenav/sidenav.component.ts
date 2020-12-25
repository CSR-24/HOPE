import { User } from './../models/user.model';
import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user: User = {
    name: '',
    auth: false
  };

  constructor(private appService: AppService) { 

  }

  ngOnInit(): void {
    this.appService.user.subscribe((user) => {
      if (!user) {
        this.user = {name: '', auth: false};
      } else {
        this.user = user;
      }
    });
  }

  loadSubCategory(category: any) {
    console.log("Category Selected: "+ category.name);
  }

}
