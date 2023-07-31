import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonLlistComponent } from './sales-person-list.component';

describe('SalesPersonLlistComponent', () => {
  let component: SalesPersonLlistComponent;
  let fixture: ComponentFixture<SalesPersonLlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersonLlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonLlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
