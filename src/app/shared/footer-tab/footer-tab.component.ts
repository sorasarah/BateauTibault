import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-tab',
  templateUrl: './footer-tab.component.html',
  styleUrls: ['./footer-tab.component.scss'],
})
export class FooterTabComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToPanier(route: string) {
    this.router.navigate(['/panier']); 
  }

}
