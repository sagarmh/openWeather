import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiMapComponent } from './citi-map.component';

describe('CitiMapComponent', () => {
  let component: CitiMapComponent;
  let fixture: ComponentFixture<CitiMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
