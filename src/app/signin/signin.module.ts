import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule,  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
