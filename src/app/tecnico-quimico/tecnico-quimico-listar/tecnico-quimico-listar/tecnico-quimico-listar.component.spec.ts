import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TecnicoQuimicoListarComponent } from "./tecnico-quimico-listar.component";

describe('TecnicoQuimicoListarComponent', () => {
  let component: TecnicoQuimicoListarComponent;
  let fixture: ComponentFixture<TecnicoQuimicoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoQuimicoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoQuimicoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
