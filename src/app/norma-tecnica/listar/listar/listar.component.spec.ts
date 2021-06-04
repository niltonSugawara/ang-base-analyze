import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NormaTecnicaListarComponent } from "./listar.component";

describe('NormaTecnicaListarComponent', () => {
  let component: NormaTecnicaListarComponent;
  let fixture: ComponentFixture<NormaTecnicaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormaTecnicaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaTecnicaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
