import { NotificationsService } from './services/notifications.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notificationCount = 10;

  constructor(private notifService:NotificationsService) {}

  public countChangedEventHandler(count:number) {
    this.notificationCount = count;
  }
}
