import { Component,  EventEmitter,Input, Output } from '@angular/core';
import { Book } from '../ts-interfaces/book';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() book?: Book;
  @Output() delete: EventEmitter<Book> = new EventEmitter();

  bookForm = new FormGroup({
    comment: new FormControl(''),
  });

  deleteMe(){
    this.delete.emit(this.book);
  }
}
