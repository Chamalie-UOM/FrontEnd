import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormatConverterComponent} from './format-converter.component';

describe('FormatConverterComponent', () => {
  let component: FormatConverterComponent;
  let fixture: ComponentFixture<FormatConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormatConverterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
