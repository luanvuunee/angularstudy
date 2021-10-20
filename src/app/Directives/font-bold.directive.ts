import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontBold]'
})
export class FontBoldDirective {

  constructor(private elementRef: ElementRef,private render: Renderer2) { 
    render.setStyle(this.elementRef.nativeElement, 'color','red');
    render.setStyle(this.elementRef.nativeElement, 'font-family','Helvetica Neue');
    render.setStyle(this.elementRef.nativeElement, 'font-size','20px');
  }

}
