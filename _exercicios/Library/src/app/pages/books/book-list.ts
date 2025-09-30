import { Component, inject } from '@angular/core';
import { BooksService } from '../../services/book.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [NgFor, AsyncPipe],
  template: `
    <h1>Livros de JS</h1>
   <section class="grid">
     <article *ngFor="let book of books$ | async">
        <h1>
          <a>{{book.title}}</a>
        </h1>
        <h2>{{book.author}}</h2>
        <img src="/livros/{{book.imageUrl}}" >
        <p>Already Read: {{ book.alreadyRead ? '✅' : '❌' }}</p>
     </article>
   </section>
  `,
  styles: ``
})
export class BookList {
  private readonly booksService = inject(BooksService);
  books$ = this.booksService.getBooks();

}
