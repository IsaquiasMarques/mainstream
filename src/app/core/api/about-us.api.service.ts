import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AboutUs, Faq } from "@core/models/about-us.model";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AboutUsApiService{
    constructor(private http: HttpClient) {}

    public faqs(): Observable<Faq[]>{
        return this.http.get<any>(`${environment.server}/api/v1/faqs/${environment.vendor}?order=asc`)
        .pipe(
            map(response => response.data)
        );
    }

    public about(): Observable<AboutUs>{
        return this.http.get<any>(`${environment.server}/api/v1/about-us/${environment.vendor}`)
        .pipe(
            map(response => response.data)
        );
    }

}