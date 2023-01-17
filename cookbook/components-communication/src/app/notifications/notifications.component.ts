import { Observable, first } from 'rxjs';
import { NotificationsService } from './../services/notifications.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  @Input() count:number = 0;
  @Output() countChanged = new EventEmitter<number>();

  count$:Observable<number> = this.notificationsService.count$;

  constructor(private notificationsService:NotificationsService) {

  }

  public add() {
    this.count++;
    this.countChanged.emit(this.count);

    this.getCountValue((value:number) => {
      this.notificationsService.setCount(++value);
    })
  }

  public reset() {
    this.count = 0;
    this.countChanged.emit(this.count);

    this.notificationsService.setCount(0);
  }

  public remove() {
    this.getCountValue((value:number) => {
      if(value === 0) return;
      this.notificationsService.setCount(--value);
    })


    if(this.count === 0) return;

    this.count--;
    this.countChanged.emit(this.count);


  }

  private getCountValue(callback:(count:number)=> void) {
    this.count$.pipe(first()).subscribe((value:number) => callback(value))
  }
}
