import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Serie } from 'src/models/series.models';
import { FamilyService } from 'src/services/family.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
 
})
export class FamilyComponent implements OnInit, OnDestroy {
  series: Serie[] = [];
  private subscription: Subscription | undefined;

  constructor(private familyService: FamilyService) {}

  ngOnInit(): void {
    this.familyService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
