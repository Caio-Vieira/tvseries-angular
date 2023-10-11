import { Component } from '@angular/core';
import { Serie } from 'src/models/series.models';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-searchnume',
  templateUrl: './searchmenu.component.html',
  styleUrls: ['./searchmenu.component.css'],
})
export class SearchmenuComponent {
  query: string = '';
  series: Serie[] = [];
  constructor(private searchService: SearchService) {}

  searchResults() {
    if (this.query.trim() === '') {
      return;
    }

    this.searchService.searchResults(this.query).subscribe((data) => {
      this.series = data.results;
    });
  }
  clear() {
    this.query = '';
    this.series = [];
  }
   clearInput() {
    this.query = '';
  }
}
