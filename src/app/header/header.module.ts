import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarModule } from './navbar/navbar.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatMenuModule,
    NavbarModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule

    
   ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
