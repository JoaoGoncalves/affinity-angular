import { Routes } from '@angular/router';
import { BookList } from './book-list';
import { BookDetails } from './book-details';

export const routes: Routes = [
  { path: 'list', component: BookList },
  {
    path: 'details/:id',
    component: BookDetails,
  },
];
