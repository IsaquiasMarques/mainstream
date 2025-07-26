import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventDetails } from '@core/contracts/event-details.contract';
import { SearchTerm } from '@core/contracts/search-term.contract';
import { Event } from '@core/models/event.model';
import { Location } from '@core/models/location.model';
import { map, Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private http: HttpClient) { }

  public all(page: number, per_page: number): Observable<Event[]>{
    return this.http.get<any>(`${environment.server}/api/v1/events?page=${page}&per_page=${per_page}`)
    .pipe(
      map(response => response.data)
    );
  }

  public search(searchTerms: SearchTerm): Observable<Event[]>{
    let params = new HttpParams();
    Object.entries(searchTerms).forEach(([key, value]) => {
      if(value !== undefined && value !== null && value !== ''){
        params = params.set(key, value);
      }
    });
    return this.http.get<any>(`${environment.server}/api/v1/events/search`, { params })
    .pipe(
      map(response => response.data)
    );
  }

  public event(slug: string, recommended_limit?: number): Observable<EventDetails>{
    let recommended_events_limit: string = '';

    if(recommended_limit){
      recommended_events_limit = `?recommended_events_limit=${recommended_limit}`;
    }

    return this.http.get<any>(`${environment.server}/api/v1/events/show/${slug + recommended_events_limit}`)
    .pipe(
      map((response) => {
        this.view(response.event.uuid).subscribe();
        return response;
      }),
      map((response) => ({
        ...response,
        event: [response.event],
      }))
    );
  }

  public view(uuid: string): Observable<any>{
    return this.http.post<any>(`${environment.server}/api/v1/events/${uuid}/view`, {})
  }

  public locations(): Observable<Location[]>{
    return this.http.get<any>(`${environment.server}/api/v1/events/locations`)
    .pipe(
      map(response => response.data)
    );
  }

  public byCategory(slug: string, page: number, per_page: number): Observable<Event[]>{
    return this.http.get<any>(`${environment.server}/api/v1/events/category/${slug}?page=${page}&per_page=${per_page}`)
    .pipe(
      map(response => response.data)
    );
  }

  public byTag(slug: string): Observable<Event[]>{
    return this.http.get<any>(`${environment.server}/api/v1/events/tag/${slug}`)
    .pipe(
      map(response => response.data)
    );
  }

  public bySeller(ide: string): Observable<Event[]>{
    return this.http.get<any>(`${environment.server}/api/v1/events/advertiser/${ide}`)
    .pipe(
      map(response => response.data)
    );
  }

}
