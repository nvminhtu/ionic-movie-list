import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
    // loadChildren: () =>
    //   import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioPageModule),
  },
  {
    path: 'user-detail',
    loadChildren: () =>
      import('./user-detail/user-detail.module').then(
        (m) => m.UserDetailPageModule
      ),
  },
  {
    path: 'movies/:id',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MoviePageModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
