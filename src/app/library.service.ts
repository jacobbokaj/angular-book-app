import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './ts-interfaces/book';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  readonly baseUrl = 'https://stephen-king-api.onrender.com/api/';
  constructor(private http: HttpClient) { }

  getBookById(id: string){
    return this.http.get<Book>(this.baseUrl + "book/" + id);
  }
}
