import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';
@Directive({
  selector: '[appExdirective]'
})
export class ExdirectiveDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="red";
  }

}
