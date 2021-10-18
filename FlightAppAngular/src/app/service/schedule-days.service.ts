import { Injectable } from '@angular/core';
import { ScheduleDays } from 'app/model/scheduleDays';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDaysService {

  constructor() { }
  getSchedule: Array<ScheduleDays>;
  getScheduleDays(): Array<ScheduleDays> {
     return this.getSchedule = [
      {
        'id': 1,
        'name': 'Monday',
        'value': false
      },
      {
        'id': 2,
        'name': 'Tuesday',
        'value': false
      },
      {
        'id': 3,
        'name': 'Wednesday',
        'value': false
      },
      {
        'id': 4,
        'name': 'Thursday',
        'value': false
      },
      {
        'id': 5,
        'name': 'Friday',
        'value': false
      },
      {
        'id': 6,
        'name': 'Saturday',
        'value': false
      },
      {
        'id': 7,
        'name': 'Sunday',
        'value': false
      },
    ]
  }
}
