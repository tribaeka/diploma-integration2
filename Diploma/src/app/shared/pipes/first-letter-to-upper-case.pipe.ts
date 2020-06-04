import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'firstLetterToUpperCase'
})
export class FirstLetterToUpperCasePipe implements PipeTransform {

  transform(value: string): string {
    const first = value[0].toUpperCase();
    const tail = value.slice(1);
    return first + tail;
  }

}
