import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastrarEditarComponent } from './cliente-cadastrar-editar.component';

describe('ClienteCadastrarEditarComponent', () => {
  let component: ClienteCadastrarEditarComponent;
  let fixture: ComponentFixture<ClienteCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
