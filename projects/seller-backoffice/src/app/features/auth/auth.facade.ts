import { inject, Injectable } from "@angular/core";
import { LoginPage } from "./pages/login.page";
import { LoginWithOTP, RequestOTP } from "./auth.models";
import { Observable, switchMap } from "rxjs";
import { AuthApiService } from "./auth.api.service";

@Injectable({
    providedIn: LoginPage
})
export class AuthFacade {

    private api = inject(AuthApiService);

    requestOTP(data: RequestOTP): Observable<any>{
        return this.api.csrf().pipe(
            switchMap(response => {
                return this.api.requestOTP(data)
            })
        )
        
        this.api.requestOTP(data);
    }

    loginWithOTP(data: LoginWithOTP): Observable<any>{
        return this.api.loginWithOTP(data);
    }

}