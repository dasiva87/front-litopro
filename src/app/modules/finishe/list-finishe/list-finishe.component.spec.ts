import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinisheComponent } from './list-finishe.component';

describe('ListFinisheComponent', () => {
  let component: ListFinisheComponent;
  let fixture: ComponentFixture<ListFinisheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFinisheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFinisheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
