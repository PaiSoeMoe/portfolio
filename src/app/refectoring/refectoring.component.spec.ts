import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefectoringComponent } from './refectoring.component';

describe('RefectoringComponent', () => {
  let component: RefectoringComponent;
  let fixture: ComponentFixture<RefectoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefectoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefectoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
