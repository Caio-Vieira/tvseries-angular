import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyResponse, Serie } from 'src/models/series.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FamilyService {
  private urlfamily = `${environment.apifamily}`;
  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http
      .get<FamilyResponse>(this.urlfamily)
      .pipe(map((response) => response.results));
  }
}
