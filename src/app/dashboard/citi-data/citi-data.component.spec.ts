import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiDataComponent } from './citi-data.component';

describe('CitiDataComponent', () => {
  let component: CitiDataComponent;
  let fixture: ComponentFixture<CitiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
