import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NormaTecnicaCadastrarEditarComponent } from "./cadastrar-editar.component";

describe('NormaTecnicaCadastrarEditarComponent', () => {
  let component: NormaTecnicaCadastrarEditarComponent;
  let fixture: ComponentFixture<NormaTecnicaCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormaTecnicaCadastrarEditarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaTecnicaCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
