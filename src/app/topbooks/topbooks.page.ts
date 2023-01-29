import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-topbooks',
  templateUrl: './topbooks.page.html',
  styleUrls: ['./topbooks.page.scss'],
})
export class TopbooksPage implements OnInit {

listTopBooks : any;  
  
constructor( private libraryService: LibraryService
    ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.GetListTopBooks();
  }

  GetListTopBooks(){
    this.libraryService.GetListTopBooks().then((data:any) => {
      this.listTopBooks =  data //{...data.sort((a:any, b:any) => a.likes >= b.likes)}
      console.log(data)
    })
  }



}
