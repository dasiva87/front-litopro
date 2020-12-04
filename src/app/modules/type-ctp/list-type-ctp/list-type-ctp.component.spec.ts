import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeCtpComponent } from './list-type-ctp.component';

describe('ListTypeCtpComponent', () => {
  let component: ListTypeCtpComponent;
  let fixture: ComponentFixture<ListTypeCtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeCtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeCtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
