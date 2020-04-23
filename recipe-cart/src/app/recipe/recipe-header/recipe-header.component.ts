import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.scss'],
})
export class RecipeHeaderComponent implements OnInit {

  // @Input will allow us to give us custom data to this component.
  // title="Mediterranean Salad" will give the value to this variable here.
  /**
   *  The title that appears in the toolbar.
   */
  @Input("title") title: string = "";

  /**
   *  Wheather or not the recipe has been favorited.
   */
  @Input("favorite") favorite: boolean = false;

  /**
   *  The Link this header should navigate back to.
   *  By default, it is the root page.
   */
  @Input("backLink") backLink: any = ['/'];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
  *  Navigates to the back link.
  */
  public navigate(){
    // Will navigate to the page given as a back link.
    // Will also make sure that the URL doesn't become a part of the browser history.
    this.router.navigateByUrl(this.backLink, { replaceUrl: true });
  }
}
