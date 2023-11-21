import { BoatsService } from './../services/boats.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boat } from '../models/boat';

@Component({
  selector: 'app-single-boat-page',
  templateUrl: './single-boat-page.page.html',
  styleUrls: ['./single-boat-page.page.scss'],
})
export class SingleBoatPagePage implements OnInit {

  boatsList!: Boat[]

  constructor(private router: Router, private BoatsService: BoatsService) { }
  
  ngOnInit() {
    this.boatsList = this.BoatsService.boatsList.slice();
  }

}
