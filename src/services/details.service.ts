import { Cast } from './../models/cast.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Serie } from 'src/models/series.models';
import { environment } from 'src/environments/environment';
import { CreditsResponese } from 'src/models/cast.models';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getSeriesDetails(id: number): Observable<Serie> {
    const urldetails = `${environment.apidetails}${id}${environment.apikeydetails}`;
    return this.http.get<Serie>(urldetails);
  }

  getSeriesCast(id: number): Observable<Cast[]> {
    const urldetails = `${environment.apidetails}${id}/credits${environment.apikeydetails}`;
    return this.http
      .get<CreditsResponese>(urldetails)
      .pipe(map((response: CreditsResponese) => response.cast));
  }
}
