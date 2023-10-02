import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  query: string | undefined;
  series: never[] | undefined;

  clear() {
    this.query = '';
    this.series = [];
  }
}
