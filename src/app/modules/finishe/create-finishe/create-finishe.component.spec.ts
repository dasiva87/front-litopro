import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinisheComponent } from './create-finishe.component';

describe('CreateFinisheComponent', () => {
  let component: CreateFinisheComponent;
  let fixture: ComponentFixture<CreateFinisheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFinisheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinisheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
