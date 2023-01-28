import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.page.html',
  styleUrls: ['./common-header.page.scss'],
})
export class CommonHeaderPage implements OnInit {

  @Input() titulo : string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
