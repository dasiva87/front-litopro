import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinisheComponent } from './update-finishe.component';

describe('UpdateFinisheComponent', () => {
  let component: UpdateFinisheComponent;
  let fixture: ComponentFixture<UpdateFinisheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFinisheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFinisheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
