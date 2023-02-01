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
    
  }

  ionViewWillEnter(){
    this.GetListTopBooks();
  }

  GetListTopBooks(){
    this.libraryService.GetListTopBooks().then((data:any) => {
      this.listTopBooks =  data 
      console.log(data)
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
