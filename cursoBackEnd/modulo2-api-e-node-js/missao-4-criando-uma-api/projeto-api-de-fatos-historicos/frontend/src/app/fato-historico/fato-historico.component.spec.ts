import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatoHistoricoComponent } from './fato-historico.component';

describe('FatoHistoricoComponent', () => {
  let component: FatoHistoricoComponent;
  let fixture: ComponentFixture<FatoHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatoHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
