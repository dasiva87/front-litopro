import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentDetailsComponent } from './list-document-details.component';

describe('ListDocumentDetailsComponent', () => {
  let component: ListDocumentDetailsComponent;
  let fixture: ComponentFixture<ListDocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDocumentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
