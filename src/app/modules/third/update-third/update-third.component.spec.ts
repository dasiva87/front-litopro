import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThirdComponent } from './update-third.component';

describe('UpdateThirdComponent', () => {
  let component: UpdateThirdComponent;
  let fixture: ComponentFixture<UpdateThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
