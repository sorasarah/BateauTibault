import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleProduitPage } from './single-produit.page';

describe('SingleProduitPage', () => {
  let component: SingleProduitPage;
  let fixture: ComponentFixture<SingleProduitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
