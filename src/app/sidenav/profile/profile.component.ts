import { RouterModule } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  @Output() loggedOut = new EventEmitter();

  onSignOut(arg: any) {
    this.router.navigate(["/"]);
    this.loggedOut.emit("Logged Out");
  }

}
