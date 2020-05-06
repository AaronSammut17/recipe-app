import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.page.html',
  styleUrls: ['./recipe-summary.page.scss'],
})
export class RecipeSummaryPage implements OnInit {

  constructor( public route: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.route.snapshot);
  }

}
