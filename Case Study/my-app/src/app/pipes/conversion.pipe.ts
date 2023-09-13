import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, code: string = 'INR') {
    if (isNaN(value)) return null;
    else {
     let forexRate = JSON.parse(localStorage.getItem('forexRates') as string);
    //  console.log(value*=forexRate[code])
     return value*=forexRate[code];

    //  return 12;
    //  const l = JSON.parse(forexRate)
      // switch (code) {
      //   case 'USD':
      //     return (value *= 0.012);
      //   case 'EUR':
      //     return (value *= 0.011);
      //   case 'GBP':
      //     return (value *= 0.0096);
      //   default:
      //     return value;
      }
    }
  }


