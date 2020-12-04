import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaperComponent } from './list-paper.component';

describe('ListPaperComponent', () => {
  let component: ListPaperComponent;
  let fixture: ComponentFixture<ListPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
