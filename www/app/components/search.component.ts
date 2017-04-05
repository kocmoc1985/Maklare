import { Component } from '@angular/core';

@Component ({
  selector: 'search',
  templateUrl: './app/components/template/search.html'
})

export class SearchComponent {

  search(term: string): void {
	console.log('fake search made:', term);
	// Perform search
  }
}
