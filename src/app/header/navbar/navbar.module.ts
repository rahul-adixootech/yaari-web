import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MatMenuModule
  ],exports: [
    NavbarComponent
  ],
})
export class NavbarModule { }
