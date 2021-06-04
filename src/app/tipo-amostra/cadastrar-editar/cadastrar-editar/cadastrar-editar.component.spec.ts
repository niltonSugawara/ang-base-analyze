import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TipoAmostraCadastrarEditarComponent } from "./cadastrar-editar.component";

describe('TipoAmostraCadastrarEditarComponent', () => {
  let component: TipoAmostraCadastrarEditarComponent;
  let fixture: ComponentFixture<TipoAmostraCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoAmostraCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAmostraCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
