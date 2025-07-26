import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateAdvertiserContract } from "@core/contracts/create-advertiser.contract";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AdvertiserApiService{

    constructor(private http: HttpClient) {}

    create(advertiser: CreateAdvertiserContract): Observable<any>{
        return this.http.post<any>(`${environment.server}/api/v1/sellers/store`, advertiser, { observe: 'response' });
    }

}
