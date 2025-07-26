import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContactUsContract } from "@core/contracts/contact-us.contract";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ContactUsApiService{

    constructor(private http: HttpClient) {}

    contact(body: ContactUsContract): Observable<any>{
        return this.http.post<any>(`${environment.mailme}`, body);
    }

}