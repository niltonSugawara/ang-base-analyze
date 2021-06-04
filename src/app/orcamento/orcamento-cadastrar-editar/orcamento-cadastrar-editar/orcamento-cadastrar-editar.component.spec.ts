import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoCadastrarEditarComponent } from './orcamento-cadastrar-editar.component';

describe('OrcamentoCadastrarEditarComponent', () => {
  let component: OrcamentoCadastrarEditarComponent;
  let fixture: ComponentFixture<OrcamentoCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcamentoCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
