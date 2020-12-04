import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDocumentDetailsComponent } from './update-document-details.component';

describe('UpdateDocumentDetailsComponent', () => {
  let component: UpdateDocumentDetailsComponent;
  let fixture: ComponentFixture<UpdateDocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDocumentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
