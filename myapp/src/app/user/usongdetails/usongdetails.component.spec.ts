import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsongdetailsComponent } from './usongdetails.component';

describe('UsongdetailsComponent', () => {
  let component: UsongdetailsComponent;
  let fixture: ComponentFixture<UsongdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsongdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsongdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
