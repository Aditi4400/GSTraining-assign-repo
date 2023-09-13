import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value : any,filterString:string): any {
    console.log(value,filterString);
    if (!filterString) return value;
    const arr=[];
    for(const item of value){
      if(item.productName.includes(filterString))
      {
        arr.push(item);
      }
    }
    return arr;
  }
}