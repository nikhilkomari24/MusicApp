import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaddreviewComponent } from './uaddreview.component';

describe('UaddreviewComponent', () => {
  let component: UaddreviewComponent;
  let fixture: ComponentFixture<UaddreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaddreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaddreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
