import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'yearPipe'
})
export class YearPipe implements PipeTransform {
  transform(_value: Date | string): string {
    if (!_value) {
      return '';
    }

    const value: Date = typeof _value === 'string' ? new Date(_value) : _value;


    return value.getFullYear().toString();
  }
}
