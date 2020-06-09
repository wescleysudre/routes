import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvdComponent } from './modules/dvd/dvd.component';
import { BookComponent } from './modules/book/book.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { DvdDetailComponent } from './modules/dvd/dvd-detail/dvd-detail.component';


const appRoutes :Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'books', component: BookComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
