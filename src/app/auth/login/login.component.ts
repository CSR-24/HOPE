import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService,  private router: Router) { }

  ngOnInit(): void {
    this.appService.hideToolbar2();
  }

  ngOnDestory(): void {
    this.appService.showToolbar2();
  }

  onSuccessHandler(data: any) {
    this.appService.loggedIn({name: data.displayName, auth: true});
    this.router.navigate(["/"]);
  }

}
