import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AmostraListarComponent } from "./listar.component";

describe('AmostraListarComponent', () => {
  let component: AmostraListarComponent;
  let fixture: ComponentFixture<AmostraListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmostraListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmostraListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
