import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsonglistComponent } from './usonglist.component';

describe('UsonglistComponent', () => {
  let component: UsonglistComponent;
  let fixture: ComponentFixture<UsonglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsonglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsonglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
