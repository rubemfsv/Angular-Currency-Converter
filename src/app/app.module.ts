import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConverterModule } from './converter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ConverterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
