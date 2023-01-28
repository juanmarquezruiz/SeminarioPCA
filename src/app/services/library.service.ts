import { Injectable } from '@angular/core';
import * as booksOffline from "./books.json";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const urlServer = "https://librarypca.fly.dev/";
const httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

@Injectable({
  providedIn: 'root'
})

export class LibraryService {
  
  
  constructor( private http: HttpClient) { }

  getAuthors() {
    return fetch("https://librarypca.fly.dev/authors").then(
      response => response.json()
    );
  }

  getBooksOffline() {
    return booksOffline;
  }

  getBooksAuthor(author_id:any) {
    return fetch(`https://librarypca.fly.dev/books_authors?author_id=${author_id}`).then(
      books => books.json()
    )
  }

  getBooks(){
    return fetch("https://librarypca.fly.dev/books").then(
      allBooks => allBooks.json()
    );
  }

  getMyFavoriteBooks(user_id: any){
    return this.http.get(`${urlServer}my_favorite_books?user_id=${user_id}`)
  }

  getCheckLikeBook(user_id: any, book_id: any){
    return this.http.get(`${urlServer}check_favorite?user_id=${user_id}&book_id=${book_id}`)
  }

  likeBook(user_id: any, book_id: any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${urlServer}favorite_books`,params, httpHeaders)
  }

  disLike(user_id: any, book_id: any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${urlServer}dislike`, params, httpHeaders)
  }

}