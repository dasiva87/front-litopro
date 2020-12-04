import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleComponent } from './create-single.component';

describe('CreateSingleComponent', () => {
  let component: CreateSingleComponent;
  let fixture: ComponentFixture<CreateSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
