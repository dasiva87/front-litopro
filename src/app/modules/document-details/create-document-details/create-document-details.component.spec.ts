import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDocumentDetailsComponent } from './create-document-details.component';

describe('CreateDocumentDetailsComponent', () => {
  let component: CreateDocumentDetailsComponent;
  let fixture: ComponentFixture<CreateDocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDocumentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
