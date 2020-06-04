import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocompleteBoldLetter'
})
export class AutocompleteBoldLetterPipe implements PipeTransform {
  transform(value: string, search: string): any {
    if (!search) { return value; }
    if (search.includes(' ')) {
      const searchArray = search.split(' ');
      const lastWord = searchArray[searchArray.length - 1];
      if (lastWord !== '') {
        search = lastWord;
      }
    }
    const searchLength = search.length;
    const  holder = value.split('');
    let indexAdder = 0;
    let indexs = this.locations(search.toLowerCase(), value.toLowerCase() );
    indexs = indexs.map( (x) => {
      const solution =  x + indexAdder;
      indexAdder += 2;
      return solution;
    });
    indexs.forEach( (i) => {
      holder.splice(i, 0 , '<span class = \'font-weight-bold\'>');
      holder.splice(i + searchLength + 1, 0,  '</span>');
    });
    return holder.join('');
  }

  locations(substring, searchValue) {
    // tslint:disable-next-line:one-variable-per-declaration prefer-const
    let indexs = [], i = -1;
    // tslint:disable-next-line:no-conditional-assignment
    while ((i = searchValue.indexOf(substring, i + 1 )) >= 0) {
      indexs.push(i);
    }
    return indexs;
  }
}
