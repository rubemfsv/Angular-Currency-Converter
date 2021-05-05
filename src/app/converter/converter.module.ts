import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterComponent } from './';

@NgModule({
  declarations: [ConverterComponent],
  imports: [CommonModule],
  exports: [ConverterComponent],
})
export class ConverterModule {}
