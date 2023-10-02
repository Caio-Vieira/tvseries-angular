import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PopularResponse, Serie } from 'src/models/series.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PopularService {
  private ulrpopular = `${environment.apipopular}`;
  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http
      .get<PopularResponse>(this.ulrpopular)
      .pipe(map((response) => response.results));
  }
}
