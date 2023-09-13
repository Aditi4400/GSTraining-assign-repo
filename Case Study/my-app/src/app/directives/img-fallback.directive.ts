import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {

  constructor() { }

   @HostListener('error',['$event'])
   switchToFallback(event:Event){
    const imgTag = event.target as HTMLImageElement;
    imgTag.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
   }
}
