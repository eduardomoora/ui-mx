import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { EddieLibComponent } from './eddie-lib.component';



@NgModule({
  declarations: [
    EddieLibComponent,
    CardComponent,
    
  ],
  imports: [ ],
  exports: [
    EddieLibComponent,
    CardComponent
  ]
})
export class EddieLibModule { }
