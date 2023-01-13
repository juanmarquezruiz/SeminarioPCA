import { Component } from '@angular/core';
import { images64 } from 'src/assets/images64';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
}) 

export class HomePage {

  public JpgBase64 = images64;
  
  constructor() {}

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }
}
