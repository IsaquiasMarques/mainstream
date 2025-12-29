import { inject, Injectable } from "@angular/core";
import { HttpRequestSchema } from "@seller-backoffice-core/api/request-schema.api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StreamStats{
    private httpSchema = inject(HttpRequestSchema);

    countUsers(channel: string): Observable<any>{
        return this.httpSchema.post('api/v1/live/host/audience/count', { channel }).pipe();
    }
}