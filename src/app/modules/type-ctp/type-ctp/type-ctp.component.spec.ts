import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeCtpComponent } from './type-ctp.component';

describe('CreateTypeCtpComponent', () => {
  let component: CreateTypeCtpComponent;
  let fixture: ComponentFixture<CreateTypeCtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeCtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeCtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
