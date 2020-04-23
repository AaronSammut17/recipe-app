import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Converts the xml2js plugin into a variable we can use in this class.
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // we need to inject HttpClient into this class
  // so that we can use the XML plugin.
  constructor(
    public http: HttpClient

  ) { }

  /**
     * Loads the data inside the app's XML file into this service.
     */
    public preload()
    {
        // this.http.get is a function that will take time to process.
        // in the meantime, the app will continue working with no data.
        // subscribing to this process will make sure I can use the data when it's loaded.
        this.http.get('/assets/data.xml', {
          headers: new HttpHeaders()
              .set('Content-Type', 'text/xml')
              .append('Access-Control-Allow-Methods', 'GET')
              .append('Access-Control-Allow-Origin', '*')
              .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),

        }).subscribe(
          // What happens when the connection has been successful.
          (content: string) => {
            console.log(content);
          },

          // What happens when there is an error.
          error => {
              console.warn(error);
          }
        );
    }
}
