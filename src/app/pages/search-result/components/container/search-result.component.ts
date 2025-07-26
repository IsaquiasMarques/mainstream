import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EventsApiService } from '@core/api/events.api.service';
import { SearchTerm } from '@core/contracts/search-term.contract';
import { Event } from '@core/models/event.model';
import { SearchTermCatcher } from '@pages/search-result/helpers/search-term-catcher.helper';
import { DisplayerComponent as EventDisplayer } from '@shared/components/events/displayer/displayer.component';

@Component({
  selector: 'app-search-result',
  imports: [ EventDisplayer ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit {

  eventsClient = inject(EventsApiService);
  searchHelper = inject(SearchTermCatcher);

  events: WritableSignal<Event[]> = signal([]);

  isSearching = signal(false);

  ngOnInit(): void {
    let searchTerm: SearchTerm = this.searchHelper.terms();
    this.search(searchTerm);
  }

  search(searchTerm: SearchTerm): void{
    this.isSearching.set(true);
    this.eventsClient.search(searchTerm).subscribe({
      next: events => {
        this.events.set(events)
      }
    });
  }

}
