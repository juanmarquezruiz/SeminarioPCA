import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-author-detail-modal',
  templateUrl: './author-detail-modal.page.html',
  styleUrls: ['./author-detail-modal.page.scss'],
})

export class AuthorDetailModalPage implements OnInit {
 

  filterAuthors : any;

    constructor(  private navParams: NavParams, 
    private modalController: ModalController,
    private libraryService: LibraryService) { 
       
    }

  ngOnInit() {
    this.getAuthorDatabyName();
  }


  closeModal(){
    this.modalController.dismiss();
  }

  //aqui va mi metodo que trae datos del autor
  getAuthorDatabyName(){
    this.filterAuthors = this.libraryService.authors.filter((a : any) => 
    a.id === this.navParams.get("authorId"))[0]
    console.log(this.filterAuthors)
  }

}
