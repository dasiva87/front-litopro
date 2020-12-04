import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrintingComponent } from './update-printing.component';

describe('UpdatePrintingComponent', () => {
  let component: UpdatePrintingComponent;
  let fixture: ComponentFixture<UpdatePrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePrintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
