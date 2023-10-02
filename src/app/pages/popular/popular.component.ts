import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Serie } from 'src/models/series.models';
import { PopularService } from 'src/services/popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  
})
export class PopularComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  series: Serie[] = [];

  constructor(private popularService: PopularService) {}
  ngOnInit(): void {
    this.popularService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
