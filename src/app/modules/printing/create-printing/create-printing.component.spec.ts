import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrintingComponent } from './create-printing.component';

describe('CreatePrintingComponent', () => {
  let component: CreatePrintingComponent;
  let fixture: ComponentFixture<CreatePrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
