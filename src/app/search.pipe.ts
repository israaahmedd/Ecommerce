
import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products';





@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 

  transform(products:Products[], searchTerm:string): Products[] {
    if (!products || !searchTerm) {
      return products; // Return the original array if products or searchTerm is not provided
    }

    searchTerm = searchTerm.toLowerCase(); // Convert the search term to lowercase for case-insensitive search

    return products.filter(products => products.title.toLowerCase().includes(searchTerm));
  }
  }


