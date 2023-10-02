import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimationResponese, Serie } from 'src/models/series.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  private urlanimations = `${environment.apianimation}`;
  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http
      .get<AnimationResponese>(this.urlanimations)
      .pipe(map((response) => response.results));
  }
}
