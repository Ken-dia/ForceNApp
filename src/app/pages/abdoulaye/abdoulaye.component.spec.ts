import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdoulayeComponent } from './abdoulaye.component';

describe('AbdoulayeComponent', () => {
  let component: AbdoulayeComponent;
  let fixture: ComponentFixture<AbdoulayeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbdoulayeComponent]
    });
    fixture = TestBed.createComponent(AbdoulayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
