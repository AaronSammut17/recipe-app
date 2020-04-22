import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.scss'],
})
export class RecipeHeaderComponent implements OnInit {

  // @Input will allow us to give us custom data to this component.
  // title="Mediterranean Salad" will give the value to this variable here.
  @Input("title") title: string = "";

  constructor() { }

  ngOnInit() {}

}
