import { Renderer2, ElementRef, AfterViewInit, Input, Directive } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidateOn]'
})
export class ValidateOnDirective implements AfterViewInit {

  @Input('appValidateOn')
  appValidateOn: string;

  private _el: HTMLInputElement;

  constructor(private formControl: NgControl, private renderer: Renderer2, private element: ElementRef) {
      this._el = element.nativeElement;
  }

  ngAfterViewInit() {
    this.renderer.listen(this._el, this.appValidateOn, (event) => {
      console.log('I', this.formControl);
    });
  }
}
