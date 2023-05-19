import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureForcastComponent } from './future-forcast.component';

describe('FutureForcastComponent', () => {
  let component: FutureForcastComponent;
  let fixture: ComponentFixture<FutureForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureForcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
