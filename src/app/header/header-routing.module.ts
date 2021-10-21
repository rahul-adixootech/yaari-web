import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path : '', component:HeaderComponent },
  { path : '', component:NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
