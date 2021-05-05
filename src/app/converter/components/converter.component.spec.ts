import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyService, ConverterService } from '../services';

import { ConverterComponent } from './converter.component';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConverterComponent],
      providers: [CurrencyService, ConverterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
