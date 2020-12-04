import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeMachineComponent } from './update-type-machine.component';

describe('UpdateTypeMachineComponent', () => {
  let component: UpdateTypeMachineComponent;
  let fixture: ComponentFixture<UpdateTypeMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
