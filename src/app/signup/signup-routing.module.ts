import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {path : '', component : SignupComponent},
  {path : 'login', component : SigninComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
