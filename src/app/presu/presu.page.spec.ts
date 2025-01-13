import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresuPage } from './presu.page';

describe('PresuPage', () => {
  let component: PresuPage;
  let fixture: ComponentFixture<PresuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PresuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
