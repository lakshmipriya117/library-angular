import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrevComponent } from './addrev.component';

describe('AddrevComponent', () => {
  let component: AddrevComponent;
  let fixture: ComponentFixture<AddrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
