import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleresto',
  templateUrl: './singleresto.page.html',
  styleUrls: ['./singleresto.page.scss'],
})
export class SinglerestoPage implements OnInit {

  resto!: {
    id: number,
    name: string,
    photo: string,
    location: string,
    description: string
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
 this.route.queryParams.subscribe(params =>{
  if(this.router.getCurrentNavigation()?.extras.state){
    this.resto = this.router.getCurrentNavigation()?.extras.state?.['resto'];
    console.log(this.resto)
  }
})
  }
}
