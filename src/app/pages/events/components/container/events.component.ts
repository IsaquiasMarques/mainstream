import { Component } from '@angular/core';
import { DisplayerComponent as EventDisplayer } from '@shared/components/events/displayer/displayer.component';
import { SearchComponent } from '@shared/components/events/search/search.component';
import { PageHeadComponent } from '@shared/components/page-head/page-head.component';

@Component({
  selector: 'app-events',
  imports: [ PageHeadComponent, SearchComponent, EventDisplayer ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
