import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-author-detail-modal',
  templateUrl: './author-detail-modal.page.html',
  styleUrls: ['./author-detail-modal.page.scss'],
})

export class AuthorDetailModalPage implements OnInit {
 

  AuthorByFilter : any;

    constructor(  private navParams: NavParams
    , private modalController: ModalController
    ) { 
       
    }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  
   
  }


  closeModal(){
    this.modalController.dismiss();
  }
  

  //aqui va mi metodo que trae datos del autor
  ionViewWillEnter(){
    
    this.AuthorByFilter = this.navParams.get("author");
  
  }

}
