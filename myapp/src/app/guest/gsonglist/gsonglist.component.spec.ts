import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsonglistComponent } from './gsonglist.component';

describe('GsonglistComponent', () => {
  let component: GsonglistComponent;
  let fixture: ComponentFixture<GsonglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsonglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsonglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
