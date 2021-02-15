import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {

  @Output() clickOutside: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside && target.tagName !== 'MAT-ICON' && target.parentElement.tagName !== 'MAT-OPTION') {
      this.clickOutside.emit();
    }
  }
}
