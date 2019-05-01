import { Directive, Input, HostBinding } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '(load)' : 'load()',
    '[src]': 'src'
  }
})
export class ImageHandlerDirective {

  constructor() { }

  @Input() src:string;
  @Input() default:string;
  @HostBinding('class') className;

  updateUrl(){
    this.src = this.default;
  }

  load(){
    this.className = 'person-image';
  }

}
