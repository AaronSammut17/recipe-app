import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Converts the xml2js plugin into a variable we can use in this class.
import * as xml2js from 'xml2js';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  /**
   *  The data available to this service.
   *  By default, it is empty.
   */
  private _data: any = {};

  /**
   *  True if the service data ispopulated, and false if not.
   */
  public get dataIsLoaded(): boolean { return this._data != null; }

  // we need to inject HttpClient into this class
  // so that we can use the XML plugin.
  constructor(
    public http: HttpClient

  ) { }

  /**
     * Loads the data inside the app's XML file into this service.
     * This is an asynchrononus function that can be queued with other code.
     */
    public async preload()
    {
        // this.http.get is a function that will take time to process.
        // in the meantime, the app will continue working with no data.
        // subscribing to this process will make sure I can use the data when it's loaded.
        await this.http.get('/assets/data.xml', {
          headers: new HttpHeaders()
              // Content-Type is how the file will be read (in this case, as text)
              .set('Content-Type', 'text/xml')

              // We're asking to GET/download the file.
              .append('Access-Control-Allow-Methods', 'GET')

              // Allows communication with any source on any website.
              .append('Access-Control-Allow-Origin', '*')

              // These are permission enabiling options.
              .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
          
          // If not text, the content will be interpreted as JSON.
           responseType: 'text'
        })
        // Promises are the same as observables, however their structure
        // can be more flexible to work with.
        .toPromise()
        // When the promise finishes, then what?
        .then(
          // What happens when the connection is successful.
            (content: string) => {
                this.parseData(content);
            },

            // What happens when the connection was unsuccessful.
            error => {
                console.warn(error);
            }
        );
    }

    /**
     *  Converts XML data into JSON.
     *  @param content The XML data as astring.
     */
    private parseData(content: string){

      xml2js.parseString(content, {
        attrkey: 'attr',
        trim: true
      }, (error,result) =>{
        // if there's an error, we'll want to stop moving forward.
        if (error != null){
          console.warn(error);
          return;
        }

        // populate the variables in this serevice to prevent further loading.
        // in different pages.
        this._data = result.data;
        console.log(this._data);
      });
    }

    /**
     *  checks that the recipe data is valid.
     *  @param recipe The recipe to check.
     */
    public checkRecipe(recipe: any): boolean{
      // if there are no attributes in the object (loaded from XML)
      if (!recipe.attr) return false;
      if (!recipe.attr.name || !recipe.attr.url) return false;
        
      return true;
    }

    /**
     *  Creates an array of categories from th data list.
     */
    public getCategories(){

      // this._data contains 2 properties:
      // attr -> the main tag attributes
      // category -> an array of categories

      // if I want the category name, I need to navigate to:
      // this._data.category[0].attr.name

      // map  will loop through the entire array of categories and process them
      // identically and individually.
      // in this exmaple, we want to retrieve the name of our categories.
      return this._data.category.map(c => c.attr.name);
    }

    /**
     * Retrieves a recipe from the data available.
     * @param url The unique identifier for this recipe.
     */
    public getRecipe(url: string)
    {
      // Alternative for: find(c => c.recipe.find(r => r.attr.url == url))
      // for (var c = 0; c < this._data.category.length; c++)
      // {
      //     var category = this._data.category[c];
      
      // Alternative for: c.recipe.find(r => r.attr.url == url)
      //     for (var i = 0; i < category.recipe.length; i++)
      //     {
      //         var recipe = category.recipe[i];
      //         if (recipe.attr.url == url)
      //         {
      //             return category;
      //         }
      //     }
      // }

      // Finds the category containing the recipe we want.
      var category = this._data.category.find(c => c.recipe.find(r => r.attr.url == url));
      
      // The category (if found) will always have one recipe item inside.
      var recipe = category.recipe.find(r => r.attr.url == url);

      // Reassign the category name so that we can access it in the component.
      recipe.attr.category = category.attr.name;

      return recipe;
    }

    /**
     * Creates an array of recipes from the data list.
     * @param shuffle Will randomize the order if true.
     * @param count Will limit the number of recipes if a value is given.
     */
    public getRecipes(shuffle: boolean = false, count?: number)
    {
      // a category contains 2 properties:
      // attr -> the name/data of this category
      // recipe -> an array of recipes    

      // if I want to access the recipe name and url, I need to navigate into:
      // this._data.category[0].recipe[0].attr.name

      var recipes = [];

      // this creates a nested array of recipes
      // but I want the recipes as a single array instead.
      // forEach will loop through every item in category
      // and add it into the array above.
      this._data.category.map(
        c => c.recipe.forEach(
            r => recipes.push(r)
        )
      );
      
      // if we want to shuffle the array,
      // we'll do it before we give back the variable.
      if (shuffle){

        // to sort in a random order
        // calculate a number from 0 - 1 (which might include 0.5, 0.3, etc)
        // when we subtract 0.5 from this number, it will randomize the order of the array.
        recipes = recipes.sort(() => 0.5 - Math.random());
      }

      // if we want to reduce the number of items,
      // we can do it via slice.
      if (count){

        recipes = recipes.slice(0, count);
      }


      return recipes;
    }
}
