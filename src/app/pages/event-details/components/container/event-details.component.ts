import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { TicketDetailsComponent } from "../views/ticket-details/ticket-details.component";
import { TicketsComponent } from "../views/tickets/tickets.component";
import { RecommendedComponent } from "../views/recommended/recommended.component";

@Component({
  selector: 'app-event-details',
  imports: [HeroComponent, TicketDetailsComponent, TicketsComponent, RecommendedComponent],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

}
