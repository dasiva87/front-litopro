import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeSheetComponent } from './create-type-sheet.component';

describe('CreateTypeSheetComponent', () => {
  let component: CreateTypeSheetComponent;
  let fixture: ComponentFixture<CreateTypeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
