import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StreamStats{
    private api = inject(HttpClient);

    countUsers(agora_uid: number): Observable<any>{
        return this.api.post(`${environment.server}/api/v1/live/stats/audience/count`, { agora_uid }).pipe();
    }
}