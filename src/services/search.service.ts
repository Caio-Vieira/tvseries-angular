import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from 'src/models/series.models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private urlSearch = `${environment.apisearch}`;

  constructor(private http: HttpClient) {}

  searchResults(query: string): Observable<SearchResponse> {
    const url = `${this.urlSearch}&query=${query}&language=pt-BR`;
    return this.http.get<SearchResponse>(url);
  }
}
