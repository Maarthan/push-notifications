import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'push-notifications-activity';
  email: string = '';

  constructor() {

  }

  onSubmit() {

    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
    
    else if (Notification.permission === "granted") {
      var notification = new Notification("You are logged in!");
    }

    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("You are logged in!");
        }
      });
    }
  }

}
