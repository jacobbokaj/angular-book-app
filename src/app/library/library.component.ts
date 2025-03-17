import { Component, inject } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LibraryService } from '../library.service';
import { Book } from '../ts-interfaces/book';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from "../book-details/book-details.component";
@Component({
  selector: 'app-library',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, BookDetailsComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  libraryService: LibraryService = inject(LibraryService);
  bookList: Book[] = [];
  bookSearched?: Book;

  bookSearch = new FormGroup({
    id: new FormControl('')
  });

  searchBook(){
    if(this.bookSearch.value.id != undefined){

      this.libraryService.getBookById(this.bookSearch.value.id || '').subscribe(book => {
        if (book.data != undefined) {
          this.bookSearched = book;
        }else {
          this.bookSearched = undefined;
        }
      });
    }
  }

  addBook(){
    if(this.bookSearched != undefined){

      let isBookFound: boolean = false;
      for (let index = 0; index < this.bookList.length; index++) {
        if(this.bookList[index].data.Title == this.bookSearched.data.Title){
          isBookFound = true;
        }     
      }

      if(isBookFound == false){
        this.bookList.push(this.bookSearched);
      }

      this.bookSearched = undefined;
      this.bookSearch.patchValue({id: undefined});


    }
  }



  deleteBook(book: Book){
    this.bookList = this.bookList.filter(x => x !== book);
  }
}
