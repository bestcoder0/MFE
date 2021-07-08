import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdufeatureComponent } from './edufeature.component';

describe('EdufeatureComponent', () => {
  let component: EdufeatureComponent;
  let fixture: ComponentFixture<EdufeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdufeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdufeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
