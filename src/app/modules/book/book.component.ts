import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/Book/book.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.books$;
  }

}
