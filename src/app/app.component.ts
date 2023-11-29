import { Component, ElementRef, OnInit } from '@angular/core';
import { Gesture, GestureController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private el: ElementRef,
    private gestureCtrl : GestureController,
    private navCtrl : NavController
  ) {

    const gesture : Gesture = this.gestureCtrl.create(
      {
        el: this.el.nativeElement,
        threshold: 40,
        gestureName: 'swipe_back',
        onEnd: (ev) => this.onMoveHandler(ev),
      }, true);
  }

  onMoveHandler(event: any){
    if (event.deltaX > 0){
      this.navCtrl.back();
    }
  }
}
