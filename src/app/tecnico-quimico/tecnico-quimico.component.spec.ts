import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoQuimicoComponent } from './tecnico-quimico.component';

describe('TecnicoQuimicoComponent', () => {
  let component: TecnicoQuimicoComponent;
  let fixture: ComponentFixture<TecnicoQuimicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoQuimicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoQuimicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
