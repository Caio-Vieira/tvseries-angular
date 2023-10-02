import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie, WesternResponse } from 'src/models/series.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WesternService {
  private urlwestern = `${environment.apiwestern}`;
  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http
      .get<WesternResponse>(this.urlwestern)
      .pipe(map((response) => response.results));
  }
}
