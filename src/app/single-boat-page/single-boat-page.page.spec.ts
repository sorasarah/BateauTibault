import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleBoatPagePage } from './single-boat-page.page';

describe('SingleBoatPagePage', () => {
  let component: SingleBoatPagePage;
  let fixture: ComponentFixture<SingleBoatPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleBoatPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
