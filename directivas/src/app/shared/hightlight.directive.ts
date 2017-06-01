import {
  Directive
  , HostListener
  , HostBinding
  , Input
} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener("mouseenter")
  onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }


  @HostBinding("style.backgroundColor")
  backgroundColor: string;

  @Input()
  defaultColor: string = 'transparent';

  @Input()
  highlightColor: string = 'yellow'

  constructor(
    /*private _elementoRef: ElementRef
    , private _renderer: Renderer*/) {

  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
