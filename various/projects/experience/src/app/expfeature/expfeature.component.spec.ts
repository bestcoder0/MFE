import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpfeatureComponent } from './expfeature.component';

describe('ExpfeatureComponent', () => {
  let component: ExpfeatureComponent;
  let fixture: ComponentFixture<ExpfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
