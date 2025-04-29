import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { FootComponent } from "../views/foot/foot.component";
import { SearchComponent } from '@shared/components/events/search/search.component';
import { DisplayerComponent as EventsDisplayer } from '@shared/components/events/displayer/displayer.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SearchComponent, EventsDisplayer, FootComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
