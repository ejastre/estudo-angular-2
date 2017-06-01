import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'button[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
  private _elementRef: ElementRef,
  private _renderer: Renderer) {
    //não recomendado //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 
      'yellow')
}

}
