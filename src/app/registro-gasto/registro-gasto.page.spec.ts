import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroGastoPage } from './registro-gasto.page';

describe('RegistroGastoPage', () => {
  let component: RegistroGastoPage;
  let fixture: ComponentFixture<RegistroGastoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
