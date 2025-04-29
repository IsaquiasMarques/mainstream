import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';

@Component({
  selector: 'app-event-details',
  imports: [ HeroComponent ],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

}
