import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
// components
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
// GUARDS
import { AuthGuard } from './user/auth.guard';
// Route
const ROUTES = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./products/product.module').then((m) => m.ProductModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
//
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
