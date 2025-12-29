import { inject, Injectable } from "@angular/core";
import { AuthFacade } from "./auth.facade";
import { HttpClient } from "@angular/common/http";
import { LoginWithOTP, RequestOTP } from "./auth.models";
import { Observable } from "rxjs";
import { environment } from "@seller-backoffice-environments/environment";

@Injectable({
    providedIn: AuthFacade
})
export class AuthApiService{

    private http = inject(HttpClient);

    csrf(): Observable<any>{
        return this.http.get<any>(`${ environment.server }/sanctum/csrf-cookie`, { observe: 'response' });
    }

    requestOTP(data: RequestOTP): Observable<any>{
        return this.http.post<any>(`${ environment.server }/api/v1/live/host/auth/request-code`, data).pipe();
    }

    loginWithOTP(data: LoginWithOTP): Observable<any>{
        return this.http.post<any>(`${ environment.server }/api/v1/live/host/auth/login`, data).pipe()
    }

}