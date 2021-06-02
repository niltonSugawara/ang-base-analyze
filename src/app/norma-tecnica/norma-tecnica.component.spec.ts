import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaTecnicaComponent } from './norma-tecnica.component';

describe('NormaTecnicaComponent', () => {
  let component: NormaTecnicaComponent;
  let fixture: ComponentFixture<NormaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormaTecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
