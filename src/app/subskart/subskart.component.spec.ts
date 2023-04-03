import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubskartComponent } from './subskart.component';

describe('SubskartComponent', () => {
  let component: SubskartComponent;
  let fixture: ComponentFixture<SubskartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubskartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubskartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
