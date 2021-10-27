import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCollectionRoutingModule } from './all-collection-routing.module';
import { AllCollectionComponent } from './all-collection.component';
@NgModule({
  declarations: [
    AllCollectionComponent
  ],
  imports: [
    CommonModule,
    AllCollectionRoutingModule
  ],
  exports:[
    AllCollectionComponent
  ]
})
export class AllCollectionModule { }
