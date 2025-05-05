import { Component } from '@angular/core';
import { PageHeadComponent } from "@shared/components/page-head/page-head.component";
import { TicketComponent } from "../views/ticket/ticket.component";
import { BookTicketComponent } from "../views/book-ticket/book-ticket.component";

@Component({
  selector: 'app-checkout',
  imports: [PageHeadComponent, TicketComponent, BookTicketComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
