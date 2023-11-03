import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray',
})
export class JoinArrayPipe implements PipeTransform {
  transform(arr: string[], separator: string): string {
    return arr.join(separator);
  }
}
