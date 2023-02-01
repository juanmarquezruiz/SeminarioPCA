import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-topbooks',
  templateUrl: './topbooks.page.html',
  styleUrls: ['./topbooks.page.scss'],
})
export class TopbooksPage implements OnInit {

listTopBooks : any;  
  
constructor( private libraryService: LibraryService
  ,private modalController : ModalController
    ) { }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  
    
  }

  ionViewWillEnter(){
    this.GetListTopBooks();
  }

  GetListTopBooks(){
    this.libraryService.GetListTopBooks().then((data:any) => {
      this.listTopBooks =  data 
    })
  }

  async showBook(book: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }


}
