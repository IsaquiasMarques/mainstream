import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoriesApiService } from '@core/api/categories.api.service';
import { EventsApiService } from '@core/api/events.api.service';
import { Category } from '@core/models/category.model';
import { Event } from '@core/models/event.model';
import { Location } from '@core/models/location.model';
import { DisplayerComponent as EventDisplayer } from '@shared/components/events/displayer/displayer.component';
import { SearchComponent } from '@shared/components/events/search/search.component';
import { PageHeadComponent } from '@shared/components/page-head/page-head.component';

@Component({
  selector: 'app-events',
  imports: [ RouterLink, PageHeadComponent, SearchComponent, EventDisplayer, NgClass ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  
  categoriesClient = inject(CategoriesApiService);
  eventsClient = inject(EventsApiService);

  activatedRoute = inject(ActivatedRoute);

  categories: WritableSignal<Category[]> = signal([]);
  locations: WritableSignal<Location[]> = signal([]);
  
  events: WritableSignal<Event[]> = signal([]);
  selectedCategory: WritableSignal<string | undefined> = signal(undefined);

  isLoadingEvents = signal(true);

  currentPage = signal<number>(1);
  limit = signal<number>(6);

  ngOnInit(): void {
    this.getCategories();
    this.getLocations();

    this.activatedRoute.paramMap.subscribe(params => {
      const category = params.get('category');
      this.isLoadingEvents.set(true);
      this.events.set([]);

      if(category){
        this.selectedCategory.set(category);
        this.getEventsByCategory(category);

      } else {
        this.selectedCategory.set(undefined);
        this.getEvents();
      }
    });
  }

  public loadMoreEvents(): void{
    this.currentPage.update(val => val + 1);

    if(this.selectedCategory()){
      this.getEventsByCategory(this.selectedCategory()!, this.currentPage())

    } else {
      this.getEvents(this.currentPage());
    }
  }

  private getCategories(): void{
    this.categoriesClient.all().subscribe(categories => this.categories.set(categories));
  }

  private getLocations(): void{
    this.eventsClient.locations().subscribe(locations => this.locations.set(locations));
  }

  private getEvents(current_page: number = this.currentPage()): void{
    this.isLoadingEvents.set(true);
    this.eventsClient.all(current_page, this.limit()).subscribe({
      next: events => {
        this.events.set([...this.events(), ...events])
        this.isLoadingEvents.set(false);
      }
    });
  }

  private getEventsByCategory(category: string, current_page: number = this.currentPage()): void{
    this.isLoadingEvents.set(true);
    this.eventsClient.byCategory(category, current_page, this.limit()).subscribe({
      next: events => {
        this.events.set([...this.events(), ...events])
        this.isLoadingEvents.set(false);
      }
    });
  }
}
