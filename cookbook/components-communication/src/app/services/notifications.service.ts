import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private count:BehaviorSubject<number> = new BehaviorSubject(10);
  count$:Observable<number> = this.count.asObservable();
  constructor() { }

  setCount(count:number) {
    this.count.next(count);
  }
}
