import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeMachineComponent } from './list-type-machine.component';

describe('ListTypeMachineComponent', () => {
  let component: ListTypeMachineComponent;
  let fixture: ComponentFixture<ListTypeMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
