import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-tabs',
  templateUrl: './recipe-tabs.page.html',
  styleUrls: ['./recipe-tabs.page.scss'],
})
export class RecipeTabsPage implements OnInit {

  constructor( public route: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.route);
  }

}
