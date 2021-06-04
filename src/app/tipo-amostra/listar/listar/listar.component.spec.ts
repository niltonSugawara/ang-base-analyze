import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAmostraListarComponent } from './listar.component';

describe('TipoAmostraListarComponent', () => {
  let component: TipoAmostraListarComponent;
  let fixture: ComponentFixture<TipoAmostraListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoAmostraListarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAmostraListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
