import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeMachineComponent } from './create-type-machine.component';

describe('CreateTypeMachineComponent', () => {
  let component: CreateTypeMachineComponent;
  let fixture: ComponentFixture<CreateTypeMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
