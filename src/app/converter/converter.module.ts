import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './';
import { ConverterService, CurrencyService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [ConverterComponent],
  exports: [ConverterComponent],
  providers: [CurrencyService, ConverterService],
})
export class ConverterModule {}
