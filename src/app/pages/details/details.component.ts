import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../../../services/details.service';
import { Serie } from '../../../models/series.models';
import { Location } from '@angular/common';
import { Cast } from 'src/models/cast.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
 
})
export class DetailsComponent implements OnInit, OnDestroy {
  series: Serie | undefined;
  cast: Cast[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private detailsService: DetailsService,
    private location: Location
  ) {}
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.detailsService.getSeriesDetails(id).subscribe((data) => {
      this.series = data;
    });

    this.detailsService.getSeriesCast(id).subscribe((data) => {
      this.cast = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goBack() {
    this.location.back();
  }
}
