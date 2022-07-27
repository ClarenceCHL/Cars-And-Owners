import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOwnersComponent } from './show-owners.component';

describe('ShowOwnersComponent', () => {
  let component: ShowOwnersComponent;
  let fixture: ComponentFixture<ShowOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
