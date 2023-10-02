import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Serie } from 'src/models/series.models';
import { WesternService } from 'src/services/western.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  series: Serie[] = [];

  constructor(private westernService: WesternService) {}
  ngOnInit(): void {
    this.westernService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
