import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImgFallbackDirective {

  constructor() { }
  @HostListener('error' ,['$event'])
  switchToFallback(event : Event){
    const imgTag=event.target as HTMLImageElement;
    imgTag.src='https://images.template.net/wp-content/uploads/2015/04/Cartoon-Love-Drawing-Template.jpg';
    
  }
}
