import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortby'
})
export class SortbyPipe implements PipeTransform {
  transform(value: any, sortString:any): any {
    if(!sortString) return value;
    if(sortString==="name"){
      value.sort((a: any,b: any) => {
        if (a.productName <= b.productName) return -1;
        else return 1;
      })
      return value;
    }
    if(sortString==="price"){
      value.sort((a: any,b: any) => {
        if (a.productPrice <= b.productPrice) return -1;
        else return 1;
      })
      return value;
    }
    return value;
  }
}