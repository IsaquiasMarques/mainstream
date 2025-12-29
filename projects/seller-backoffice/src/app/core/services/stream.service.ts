import { HttpStatusCode } from "@angular/common/http";
import { inject, Injectable, Signal, signal } from "@angular/core";
import { HttpRequestSchema } from "@seller-backoffice-core/api/request-schema.api.service";
import { BaseEvent } from "@seller-backoffice-core/models/event.model";
import { catchError, Observable, of, switchMap, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StreamService{
    private httpSchema = inject(HttpRequestSchema);
    private readonly EventInLive = signal<BaseEvent[]>([]);

    private start(event: BaseEvent): Observable<any>{
        return this.httpSchema.post<any>('api/v1/live/host/start/stream', { event: event.uuid }).pipe();
    }

    private joinAsHost(userEmail: string, event: BaseEvent): Observable<any>{
        return this.httpSchema.post<any>('api/v1/live/host/join/stream', { email: userEmail, event: event.uuid }).pipe(
            tap(response => {
                this.EventInLive.set([ event ]);
            })
        );
    }

    get eventInLive(): Signal<BaseEvent[]>{
        return this.EventInLive;
    }

    startAndJoin(userEmail: string, event: BaseEvent): Observable<any>{
        return this.start(event).pipe(
            switchMap(response => {
                if(response.status === HttpStatusCode.Ok){
                    return this.joinAsHost(userEmail, event);
                }

                return of(response);
            }),
            catchError(error => throwError(() => error))
        )
    }

    end(): Observable<any>{
        return this.httpSchema.post<any>('api/v1/live/host/end/stream', { event: this.eventInLive()[0].uuid }).pipe();
    }
}