import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeSheetComponent } from './list-type-sheet.component';

describe('ListTypeSheetComponent', () => {
  let component: ListTypeSheetComponent;
  let fixture: ComponentFixture<ListTypeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
