import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmitRakteComponent } from './amit-rakte.component';

describe('AmitRakteComponent', () => {
  let component: AmitRakteComponent;
  let fixture: ComponentFixture<AmitRakteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmitRakteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmitRakteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
