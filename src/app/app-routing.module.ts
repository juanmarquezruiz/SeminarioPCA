import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  // home ya no lo usamos asi
  // {
  //   path: 'home'
  //   , loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //   , canActivate: [LoginGuard,IntroGuard]
  // },
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    , canActivate: [IntroGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  , canActivate:[LoginGuard]
  },
  {
    path: 'books-modal',
    loadChildren: () => import('./books-modal/books-modal.module').then( m => m.BooksModalPageModule)
  },
  {
    path: 'book-detail-modal',
    loadChildren: () => import('./book-detail-modal/book-detail-modal.module').then( m => m.BookDetailModalPageModule)
  },
  // {
  //   path: 'footer',
  //   loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  // },
  // {
  //   path: 'authors',
  //   loadChildren: () => import('./authors/authors.module').then( m => m.AuthorsPageModule)
  // },
  // {
  //   path: 'books',
  //   loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule)
  // },
  // {
  //   path: 'common-header',
  //   loadChildren: () => import('./common-header/common-header.module').then( m => m.CommonHeaderPageModule)
  // },
  // {
  //   path: 'favorite-books',
  //   loadChildren: () => import('./favorite-books/favorite-books.module').then( m => m.FavoriteBooksPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
