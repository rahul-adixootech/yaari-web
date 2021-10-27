import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , loadChildren: () => import('./home/home.module').then(m => m.HomeModule  ) },
  { path: 'home' , loadChildren: () => import('./home/home.module').then(m => m.HomeModule  ) },
  { path: 'signin',loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup',loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'header',loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
  { path: 'footer',loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
  { path: 'forgot',loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'all-collections',loadChildren: () => import('./all-collection/all-collection.module').then(m => m.AllCollectionModule) },
  { path: 'about',loadChildren: () => import('./about/about-routing.module').then(m => m.AboutRoutingModule)},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
