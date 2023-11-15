import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamadouComponent } from './mamadou.component';

describe('MamadouComponent', () => {
  let component: MamadouComponent;
  let fixture: ComponentFixture<MamadouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MamadouComponent]
    });
    fixture = TestBed.createComponent(MamadouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
