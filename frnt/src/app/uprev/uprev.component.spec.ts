import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprevComponent } from './uprev.component';

describe('UprevComponent', () => {
  let component: UprevComponent;
  let fixture: ComponentFixture<UprevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UprevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UprevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
