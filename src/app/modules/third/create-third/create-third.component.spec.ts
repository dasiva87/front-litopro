import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThirdComponent } from './create-third.component';

describe('CreateThirdComponent', () => {
  let component: CreateThirdComponent;
  let fixture: ComponentFixture<CreateThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
