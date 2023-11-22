import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglerestoPage } from './singleresto.page';

describe('SinglerestoPage', () => {
  let component: SinglerestoPage;
  let fixture: ComponentFixture<SinglerestoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SinglerestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
