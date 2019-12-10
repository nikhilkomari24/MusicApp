import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaddsongComponent } from './uaddsong.component';

describe('UaddsongComponent', () => {
  let component: UaddsongComponent;
  let fixture: ComponentFixture<UaddsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaddsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaddsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
