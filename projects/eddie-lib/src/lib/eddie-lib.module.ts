import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { EddieLibComponent } from './eddie-lib.component';
import { PillComponent } from './components/pill/pill.component';



@NgModule({
  declarations: [
    EddieLibComponent,
    CardComponent,
    PillComponent,
    
  ],
  imports: [ ],
  exports: [
    EddieLibComponent,
    CardComponent,
    PillComponent,
  ]
})
export class EddieLibModule { }
