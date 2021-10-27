import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCollectionComponent } from './all-collection.component';

const routes: Routes = [
  { path:'', component: AllCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCollectionRoutingModule { }
