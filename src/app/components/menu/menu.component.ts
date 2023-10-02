import { Component } from '@angular/core';
import { Serie } from 'src/models/series.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  query: string = '';
  series: Serie[] = [];
  FamilyService: string | undefined;

  clear() {
    this.query = '';
    this.series = [];
  }
}
