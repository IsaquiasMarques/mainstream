import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "@core/models/category.model";
import { map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoriesApiService{

    constructor(private http: HttpClient){ }

    public all(): Observable<Category[]>{
        return this.http.get<any>(`${environment.server}/api/v1/categories?order_by=events`)
        .pipe(
            map(response => response.data)
        );
    }

}