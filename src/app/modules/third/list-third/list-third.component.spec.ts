import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThirdComponent } from './list-third.component';

describe('ListThirdComponent', () => {
  let component: ListThirdComponent;
  let fixture: ComponentFixture<ListThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
