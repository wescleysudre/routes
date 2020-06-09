import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000)
      .subscribe(() => this.bookSubject$.next([
        { title: "Book 1", pages: 200, authors: ["John", "Nicole"] },
        { title: "Book 2", pages: 100, authors: ["Milly"] },
        { title: "Book 3", pages: 300, authors: ["Fred"] },
        { title: "Book 4", pages: 230, authors: ["Anne", "Peter", "Samuel"] },
        { title: "Book 5", pages: 130, authors: ["Paul", "John"] },
    ]))
  }

  add(b: Book) {
    this.bookSubject$.getValue().push(b);
  }

  remove(i: number) {
    let books = this.bookSubject$.getValue();
    if (i >= 0 && i < books.length) {
      books.splice(i, 1);
    }
  }

  get(i: number): Observable<Book> {
    return this.books$.pipe(
      map(books => (i >= 0 && i < books.length) ? books[i] : null),
      delay(2000)
    )
  }
}
