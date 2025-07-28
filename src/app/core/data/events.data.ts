import { Injectable, signal } from "@angular/core";
import { Event } from "@core/models/event.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EventsData{
    
    private latestEventsContainer: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
    private paginatedEventsContainer: { [page: number]: BehaviorSubject<Event[]>} = { 0: new BehaviorSubject<Event[]>([]) };
    private paginatedWithCategoryFilterEventsContainer: { [page: number]: { [categorySlug: string]: BehaviorSubject<Event[]> } } = { 0: { '': new BehaviorSubject<Event[]>([]) } };

    public insert(data: Event[]): void{
        this.latestEventsContainer.next(data);
    }

    public get latestEvents(): Observable<Event[]>{
        return this.latestEventsContainer.asObservable();
    }

    public insertWithPagination(data: Event[], page: number): void {
        if (!this.paginatedEventsContainer[page]) {
            this.paginatedEventsContainer[page] = new BehaviorSubject<Event[]>([]);
        }

        this.paginatedEventsContainer[page].next(data);
    }

    public getPaginatedData(page: number): Observable<Event[]> {
        if (!this.paginatedEventsContainer[page]) {
            this.paginatedEventsContainer[page] = new BehaviorSubject<Event[]>([]);
        }

        return this.paginatedEventsContainer[page].asObservable();
    }

    public insertWithCategoryFilter(data: Event[], categorySlug: string, page: number): void{
        // Inicializa o page se não existir
        if (!this.paginatedWithCategoryFilterEventsContainer[page]) {
            this.paginatedWithCategoryFilterEventsContainer[page] = {};
        }

        // Inicializa o categorySlug se não existir dentro da page
        if (!this.paginatedWithCategoryFilterEventsContainer[page][categorySlug]) {
            this.paginatedWithCategoryFilterEventsContainer[page][categorySlug] = new BehaviorSubject<Event[]>([]);
        }

        // Define os dados no BehaviorSubject
        this.paginatedWithCategoryFilterEventsContainer[page][categorySlug].next(data);
    }

    public getPaginatedWithCategoryFilter(categorySlug: string, page: number): Observable<Event[]>{
        // Inicializa caso ainda não tenha sido definido
        if (!this.paginatedWithCategoryFilterEventsContainer[page]) {
            this.paginatedWithCategoryFilterEventsContainer[page] = {};
        }

        if (!this.paginatedWithCategoryFilterEventsContainer[page][categorySlug]) {
            this.paginatedWithCategoryFilterEventsContainer[page][categorySlug] = new BehaviorSubject<Event[]>([]);
        }

        return this.paginatedWithCategoryFilterEventsContainer[page][categorySlug].asObservable();
    }
}