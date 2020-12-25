import { AppService } from './../../services/app.service';
import { RouterModule } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private appService: AppService, 
    private router: Router) {

  }

  ngOnInit(): void {
  }

  @Output() loggedOut = new EventEmitter();

  onSignOut(arg: any) {
    this.appService.logOut();
    this.loggedOut.emit("Logged Out");
    this.router.navigate(["/"]);
  }

}
