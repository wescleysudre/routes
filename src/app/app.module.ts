import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './modules/book/book.component';
import { DvdComponent } from './modules/dvd/dvd.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { MaterialModule } from './material.module';
// import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DvdDetailComponent } from './modules/dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './modules/dvd/dvd-form/dvd-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './modules/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './modules/book/book-authors/book-authors.component';
import { ElectronicsModule } from './electronics/electronics.module';

// const appRoutes :Routes = [
//   { path: 'dvds', component: DvdComponent },
//   { path: 'books', component: BookComponent },
//   { path: '', pathMatch: 'full', redirectTo: 'dvds' },
//   { path: '**', component: PageNotFoundComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // RouterModule.forRoot(appRoutes),
    // ElectronicsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
