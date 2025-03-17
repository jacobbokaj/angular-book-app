import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryComponent } from './library.component';
import { LibraryService } from '../library.service';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import mockBook from '../mock-data/mock-book.json';
import { BookDetailsComponent } from '../book-details/book-details.component';
describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let service: LibraryService;
  let httpTestingController: HttpTestingController


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryComponent],
      providers: [
        LibraryService,
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LibraryService);


    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('booklist should have length to be 0',() => {
    expect(component.bookList.length).toBe(0);
  });

  it('booksearch should be undefined',() =>{
    expect(component.bookSearched).toBeUndefined();
  });

  it('should find a book with api', () =>{


    service.getBookById('19').subscribe(book => {
      return expect(book).toEqual(mockBook);
   });

    const req = httpTestingController.expectOne('https://stephen-king-api.onrender.com/api/book/19')
    expect(req.request.method).toEqual('GET')
    req.flush(mockBook);

  });

  it('should add a book to a list', () =>{
   
    component.bookSearched = mockBook;
    component.addBook();
    expect(component.bookList.length).toEqual(1);
  });

 /* it('should delete a book by event',() => {
    component.bookSearched = mockBook;
    component.addBook();

    let fixturee: ComponentFixture<BookDetailsComponent>;
    const dCom = TestBed.createComponent(BookDetailsComponent);
    let componentsss = dCom.componentInstance;

    const myComponent = fixture.debugElement.query(By.directive(BookDetailsComponent));
    componentsss.book = mockBook;
    myComponent.triggerEventHandler('delete', { });

    fixture.detectChanges();
    expect(component.bookList.length).toBe(0);
  })*/


});
