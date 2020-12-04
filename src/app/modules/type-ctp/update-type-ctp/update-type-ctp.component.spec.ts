import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeCtpComponent } from './update-type-ctp.component';

describe('UpdateTypeCtpComponent', () => {
  let component: UpdateTypeCtpComponent;
  let fixture: ComponentFixture<UpdateTypeCtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeCtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeCtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
