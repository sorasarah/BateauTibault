import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-recette',
  templateUrl: './single-recette.page.html',
  styleUrls: ['./single-recette.page.scss'],
})
export class SingleRecettePage implements OnInit {

  recipe!: {
    id: number,
    title: string,
    ingredients : string[],
    preparation: string,
    img: string
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.recipe = this.router.getCurrentNavigation()?.extras.state?.['recipe'];
        console.log(this.recipe)
        
      }
    })
  }


}
