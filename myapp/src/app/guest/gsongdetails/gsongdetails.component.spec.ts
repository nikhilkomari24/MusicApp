import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsongdetailsComponent } from './gsongdetails.component';

describe('GsongdetailsComponent', () => {
  let component: GsongdetailsComponent;
  let fixture: ComponentFixture<GsongdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsongdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsongdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
