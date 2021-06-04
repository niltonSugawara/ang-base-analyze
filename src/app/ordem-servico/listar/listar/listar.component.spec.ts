import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OrdemServicoListarComponent } from "./listar.component";

describe('OrdemServicoListarComponent', () => {
  let component: OrdemServicoListarComponent;
  let fixture: ComponentFixture<OrdemServicoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemServicoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemServicoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
