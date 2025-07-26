import { NgClass } from '@angular/common';
import { Component, input, OnInit, output, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReceiveTicicketDetailsOPtions } from '@core/enums/receive-ticket-details-options.enum';
import { TicketPurchaser } from '@core/models/purchaser.model';

@Component({
  selector: 'app-book-ticket',
  imports: [ ReactiveFormsModule, NgClass ],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent implements OnInit {
  receiveOptionsEnum = ReceiveTicicketDetailsOPtions;
  selectedOption: WritableSignal<ReceiveTicicketDetailsOPtions> = signal(this.receiveOptionsEnum.EMAIL);

  purchaseTicketFormGroup!: FormGroup;

  formIsInvalid = signal<boolean>(false);

  purchaseFormDateEventEmitter = output<TicketPurchaser>();
  isPurchasingTicket = input.required<boolean>();

  ngOnInit(): void {
    this.purchaseTicketFormGroup = new FormGroup({
      'name': new FormControl('', [ Validators.required ]),
      'email': new FormControl('', [ Validators.required, Validators.email ]),
      'address': new FormControl('', [ Validators.required ]),
      'contact': new FormControl('', [ Validators.required ]),
    });
  }

  changeOption(option: ReceiveTicicketDetailsOPtions){
    this.selectedOption.set(option);
  }

  submit(): void{
    if(this.formIsInvalid()){
      return;
    }
    
    const ticketPurchaser: TicketPurchaser = {
      name: this.purchaseTicketFormGroup.get('name')?.value,
      email: this.purchaseTicketFormGroup.get('email')?.value,
      address: this.purchaseTicketFormGroup.get('address')?.value,
      contact: this.purchaseTicketFormGroup.get('contact')?.value,
      option: this.selectedOption()
    }
    this.purchaseFormDateEventEmitter.emit(ticketPurchaser);
  }

}
