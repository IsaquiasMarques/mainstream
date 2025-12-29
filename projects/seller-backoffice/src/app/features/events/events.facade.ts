import { inject, Injectable } from "@angular/core";
import { EventListPage } from "./pages/event-list.page";
import { EventsData } from "./events.data";
import { map, Observable, of, switchMap, take } from "rxjs";
import { Event, PaginatedEventResponse } from "./events.models";
import { EventApiService } from "./events.api.service";

@Injectable({
    providedIn: EventListPage
})
export class EventFacade {
    private dataContainer = inject(EventsData);
    private api = inject(EventApiService);

    public eventsWithStreaming(page: number, per_page: number = 6): Observable<PaginatedEventResponse>{
        return this.dataContainer.getPaginatedData(page).pipe(
            take(1),
            switchMap(response => {
                if(!(response.length > 0)){
                    return this.api.events(page, per_page).pipe(
                        map(incoming => {
                            this.dataContainer.insertWithPagination([incoming], page);
                            return incoming;
                        })
                    );
                }

                return of(response[0]);
            })
        )
    }
}