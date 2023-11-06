import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) {
      return '';
    }

    const day = String(value.getDate()).padStart(2, '0');
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const year = String(value.getFullYear()).slice(-2);
    const hours = String(value.getHours()).padStart(2, '0');
    const minutes = String(value.getMinutes()).padStart(2, '0');
    const offsetMinutes = -value.getTimezoneOffset();
    const offsetSign = offsetMinutes >= 0 ? '+' : '-';
    const offsetHours = String(Math.floor(Math.abs(offsetMinutes) / 60))
    const offsetMinutesPart = String(Math.abs(offsetMinutes) % 60).padStart(2, '0');
    //const offsetString = `UTC ${offsetSign}${offsetHours}:${offsetMinutesPart}`;
    const offsetString = `UTC ${offsetSign}${offsetHours}`;

    return `${day} ${month} ${year}<br>${hours} ${minutes} ${offsetString}`;
  }
}
