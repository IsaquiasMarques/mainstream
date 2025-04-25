import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { SearchComponent } from '../views/search/search.component';
import { EventsComponent } from '../views/events/events.component';
import { FootComponent } from "../views/foot/foot.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SearchComponent, EventsComponent, FootComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
