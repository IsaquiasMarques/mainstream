import { Component } from '@angular/core';

@Component({
  selector: 'app-book-ticket',
  imports: [],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {
  receiveOptionsEnum = ReceiveOPtions;
  selectedOption: ReceiveOPtions = this.receiveOptionsEnum.WHATSAPP;

  changeOption(option: ReceiveOPtions){
    this.selectedOption = option;
  }

}

enum ReceiveOPtions{
  WHATSAPP = 'whatsapp',
  EMAIL = 'email'
}
