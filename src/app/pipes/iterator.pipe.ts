import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterator'
})
export class IteratorPipe implements PipeTransform {
  public data;
  transform(value: any, args?: any): any {
    this.data = [];
    for (let key in value) {
      if (key) {
        this.data.push(value[key]);
      }
    }
    return this.data;
  }

}
