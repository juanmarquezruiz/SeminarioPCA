import { Component } from '@angular/core';
import { images64 } from 'src/assets/images64';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  public JpgBase64 = images64;

  constructor(private router: Router, private storage: Storage) {
   
  }

  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("menu/home"); 
  }
  
  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title1: "Ficha de Autor",
      imagin: this.JpgBase64.Autor,
      texto: "Información completa de Autor, con contador de popularidad."
    },
    {
      title1: "Menu de Opciones",
      imagin: this.JpgBase64.menu,
      texto: "Tendrás un vistoso menu, para consultar tu autor o tu libro, con opción para marcarlo como tu favorito."
    },
    {
      title1: "Registro a la Aplicación",
      imagin: this.JpgBase64.registro,
      texto: "Podrás registrarte gratuitamente en la sección de registro."
    }
  ]


}

