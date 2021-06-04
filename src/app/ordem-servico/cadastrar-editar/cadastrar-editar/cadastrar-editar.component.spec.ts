import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OrdemServicoCadastrarEditarComponent } from "./cadastrar-editar.component";

describe('OrdemServicoCadastrarEditarComponent', () => {
  let component: OrdemServicoCadastrarEditarComponent;
  let fixture: ComponentFixture<OrdemServicoCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdemServicoCadastrarEditarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemServicoCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
