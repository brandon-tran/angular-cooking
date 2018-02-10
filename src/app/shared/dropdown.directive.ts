import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') menuOpen = false;

  constructor() { }

  @HostListener('click') mouseclick(eventData: Event) {
    this.menuOpen = !this.menuOpen;
  }


}

//onlick open
//clcick disappear
