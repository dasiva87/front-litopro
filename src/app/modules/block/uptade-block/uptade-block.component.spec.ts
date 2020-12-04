import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptadeBlockComponent } from './uptade-block.component';

describe('UptadeBlockComponent', () => {
  let component: UptadeBlockComponent;
  let fixture: ComponentFixture<UptadeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptadeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UptadeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
