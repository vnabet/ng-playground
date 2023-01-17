import { NotificationsService } from './../services/notifications.service';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.css']
})
export class BellComponent {
  @Input() count:number = 0;

  count$:Observable<number> = this.notificationsService.count$;

  constructor(private notificationsService:NotificationsService){}
}
