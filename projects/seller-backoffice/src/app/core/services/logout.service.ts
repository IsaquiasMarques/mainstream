import { inject, Injectable } from "@angular/core";
import { SellerLayoutComponent } from "@seller-backoffice-core/layout/seller-layout.component";
import { Observable } from "rxjs";
import { HttpRequestSchema } from "@seller-backoffice-core/api/request-schema.api.service";

@Injectable({
    providedIn: SellerLayoutComponent
})
export class Logout {
    private httpSchema = inject(HttpRequestSchema);

    public logout(): Observable<any>{
        return this.httpSchema.post<any>('api/v1/live/host/logout', {});
    }
}