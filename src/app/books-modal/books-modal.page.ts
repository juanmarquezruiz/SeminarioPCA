import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;
  listBooks: any;
  
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
    // por sincronia no funciona como se espera
  //  this.libraryService.getBooksAuthor(this.author.id).then((data: any) => {
  //     this.listBooks = data
  //     console.log(this.listBooks)
  //   },
  //     (error) =>
  //       console.log(error)
  //   )
  }

  // ionViewWillEnter(){
    
  //   this.libraryService.getBooksAuthorOpenLibraryByName(this.author.name).then((data: any) => {
  //     this.listBooks = data.docs
  //     this.listBooks = this.listBooks.slice(0,13)
  //     console.log(this.listBooks)
  //   },
  //     (error) =>
  //       console.log(error)
  //   )
  // }

  ionViewWillEnter(){
    this.libraryService.getBooksAuthor(this.author.id).then((data: any) => {
      this.listBooks = data
      console.log(this.listBooks)
    },
      (error) =>
        console.log(error)
    )
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
