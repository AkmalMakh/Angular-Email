import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDeathComponent } from './total-death.component';

describe('TotalDeathComponent', () => {
  let component: TotalDeathComponent;
  let fixture: ComponentFixture<TotalDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
