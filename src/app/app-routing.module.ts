import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signin',loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup',loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'header',loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
  { path: 'footer',loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
  { path: '' , loadChildren: () => import('./home/home.module'    ).then(m => m.HomeModule  ) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
