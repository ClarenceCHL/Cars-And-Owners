import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarownersComponent } from './carowners.component';

describe('CarownersComponent', () => {
  let component: CarownersComponent;
  let fixture: ComponentFixture<CarownersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarownersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
