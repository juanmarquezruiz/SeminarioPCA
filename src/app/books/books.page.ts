import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getBooks().then(books => {
      this.books = books;
    })
  }

}
