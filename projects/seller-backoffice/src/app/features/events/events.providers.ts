import { EventApiService } from "./events.api.service";
import { EventFacade } from "./events.facade";

export function eventsProviders(): any[]{
    return [
        EventApiService,
        EventFacade
    ];
}