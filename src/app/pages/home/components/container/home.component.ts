import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { FootComponent } from "../views/foot/foot.component";
import { SearchComponent } from '@shared/components/events/search/search.component';
import { DisplayerComponent as EventsDisplayer } from '@shared/components/events/displayer/displayer.component';
import { RouterLink } from '@angular/router';
import { CategoriesApiService } from '@core/api/categories.api.service';
import { Category } from '@core/models/category.model';
import { EventsApiService } from '@core/api/events.api.service';
import { Event } from '@core/models/event.model';
import { Location } from '@core/models/location.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent, SearchComponent, EventsDisplayer, FootComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  categoriesClient = inject(CategoriesApiService);
  eventsClient = inject(EventsApiService);

  categories: WritableSignal<Category[]> = signal([]);
  locations: WritableSignal<Location[]> = signal([]);
  
  events: WritableSignal<Event[]> = signal([]);

  isLoadingEvents = signal(true);

  limit = signal<number>(6);

  ngOnInit(): void {
    this.getCategories();
    this.getLocations();
    this.getEvents();
  }

  private getCategories(): void{
    this.categoriesClient.all().subscribe(categories => this.categories.set(categories));
  }

  private getLocations(): void{
    this.eventsClient.locations().subscribe(locations => this.locations.set(locations));
  }

  private getEvents(): void{
    this.isLoadingEvents.set(true);
    this.eventsClient.all(1, this.limit()).subscribe({
      next: events => {
        this.events.set(events)
        this.isLoadingEvents.set(false);
      }
    });
  } 
}
