import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Serie } from 'src/models/series.models';
import { AnimationsService } from 'src/services/animations.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
 
})
export class AnimationsComponent implements OnInit, OnDestroy {
  series: Serie[] = [];
  private subscription: Subscription | undefined;

  constructor(private animationsService: AnimationsService) {}
  ngOnInit(): void {
    this.animationsService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
