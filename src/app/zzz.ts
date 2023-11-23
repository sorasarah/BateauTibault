import { Component, ElementRef, OnInit } from '@angular/core';
import { Gesture, GestureController, NavController } from '@ionic/angular';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  toastOpen: Boolean = false;

  constructor(
    private el: ElementRef,
    private gestureCtrl: GestureController,
    private navCtrl: NavController,
    private toastService: ToastService
  ) {
    const gesture: Gesture = this.gestureCtrl.create(
      {
        el: this.el.nativeElement,
        threshold: 40,
        gestureName: 'swipe_back',
        onEnd: (ev) => this.onMoveHandler(ev),
      },
      true
    );
    gesture.enable();
  }

  ngOnInit() {
    this.toastService.toastOpen$.subscribe((value) => {
      this.toastOpen = value;
    });
  }

  onMoveHandler(event: any) {
    if (event.deltaX > 0) {
      this.navCtrl.back();
    }
  }

  setOpen(open: boolean) {
    this.toastService.updateToastOpen(open);
  }
}