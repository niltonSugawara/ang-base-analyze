import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TecnicoQuimicoCadastrarEditarComponent } from "./tecnico-quimico-cadastrar-editar.component";

describe('TecnicoQuimicoCadastrarEditarComponent', () => {
  let component: TecnicoQuimicoCadastrarEditarComponent;
  let fixture: ComponentFixture<TecnicoQuimicoCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoQuimicoCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoQuimicoCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
