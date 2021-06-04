import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AmostraCadastrarEditarComponent } from "./cadastrar-editar.component";

describe('AmostraCadastrarEditarComponent', () => {
  let component: AmostraCadastrarEditarComponent;
  let fixture: ComponentFixture<AmostraCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmostraCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmostraCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
