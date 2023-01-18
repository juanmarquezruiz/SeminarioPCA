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
    this.router.navigateByUrl("/home"); 
  }
  
  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title1: "FULLSOLUTION",
      title2: "ONU XPON",
      imagin: this.JpgBase64.OnuClient,
      texto: "ONU XPON FD-HG8410C 1GE+3FE+WIFI 2.4G 5 dBi+CATV 1GE+3FE+WIFI 2.4G 5 dBi+CATV Dual EPON/GPON DL (↓) 2.5 Gbps UL (↑) 1.25Gbps WLAN IEEE 802.11 b/g/n (2T2R)"
    },
    {
      title1: "FULLSOLUTION",
      title2: "PATCH CORD",
      imagin: this.JpgBase64.OnuClient,
      texto: "Cable de conexión también llamado cable de red, se usa en redes de computadoras o sistemas informáticos o electrónicos para conectar un dispositivo electrónico con otro.Está compuesto por cobre y cubierto de plástico."
    },
    {
      title1: "FULLSOLUTION",
      title2: "AMPLIFICADOR OPTICO",
      imagin: this.JpgBase64.OnuClient,
      texto: "YEDFA 16 X 22dBm+WDM SCAPC-SCUPC Chasis 2U 16 Canales x 22 dBm BUILT-IN WDM SCAPC-SCUPC"
    }
  ]


}

