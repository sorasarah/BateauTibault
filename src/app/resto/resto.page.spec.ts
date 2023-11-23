import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestoPage } from './resto.page';

describe('RestoPage', () => {
  let component: RestoPage;
  let fixture: ComponentFixture<RestoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
