import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRecoverdComponent } from './total-recoverd.component';

describe('TotalRecoverdComponent', () => {
  let component: TotalRecoverdComponent;
  let fixture: ComponentFixture<TotalRecoverdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalRecoverdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRecoverdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
