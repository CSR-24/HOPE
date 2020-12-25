import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
    toolbar2Displayed = new Subject<boolean>();
    user = new Subject<User>();

    hideToolbar2() {
        this.toolbar2Displayed.next(false);
    }

    showToolbar2() {
        this.toolbar2Displayed.next(true);
    }

    loggedIn(userData:User) {
        if(userData) {
            this.user.next({
                name: userData.name,
                auth: userData.auth,
            });
        } else {
            this.user.next();
        }
    }

}