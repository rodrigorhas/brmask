import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrMaskComponent } from './rodrigorhas-brmask.component';
import { BrMaskerDirective } from './rodrigorhas-brmask.directive';
import { BrMaskService } from './rodrigorhas-brmask.service';

@NgModule({
  declarations: [
    BrMaskComponent,
    BrMaskerDirective
  ],
  providers: [
    BrMaskService
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BrMaskComponent,
    BrMaskerDirective
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BrMaskModule { }
