import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOwnersComponent } from './add-edit-owners.component';

describe('AddEditOwnersComponent', () => {
  let component: AddEditOwnersComponent;
  let fixture: ComponentFixture<AddEditOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
