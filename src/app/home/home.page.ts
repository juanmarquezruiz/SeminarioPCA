import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  @ViewChild('popover')  popover!: { event: Event; };

  isOpen = false;
  
presentPopover(e: Event) {
  this.popover.event = e;
  this.isOpen = true;
}
}

