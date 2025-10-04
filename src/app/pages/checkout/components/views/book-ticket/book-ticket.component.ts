import { NgClass } from '@angular/common';
import { Component, input, OnChanges, OnInit, output, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentMethod } from '@core/enums/payment-method.enum';
import { ReceiveTicicketDetailsOPtions } from '@core/enums/receive-ticket-details-options.enum';
import { TicketPurchaser } from '@core/models/purchaser.model';

@Component({
  selector: 'app-book-ticket',
  imports: [ ReactiveFormsModule, NgClass ],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent implements OnInit, OnChanges {
  receiveOptionsEnum = ReceiveTicicketDetailsOPtions;
  paymentMethodsEnum = PaymentMethod;
  selectedOption: WritableSignal<ReceiveTicicketDetailsOPtions> = signal(this.receiveOptionsEnum.EMAIL);
  selectedPaymentMethod: WritableSignal<PaymentMethod> = signal(this.paymentMethodsEnum.PAYPAY_APP);
  purchaseTicketFormGroup!: FormGroup;

  formIsInvalid = signal<boolean>(false);

  purchaseFormDateEventEmitter = output<TicketPurchaser>();
  isPurchasingTicket = input.required<boolean>();
  purchaseCompleted = input.required<boolean>();

  ngOnInit(): void {
    this.purchaseTicketFormGroup = new FormGroup({
      'name': new FormControl('', [ Validators.required ]),
      'email': new FormControl('', [ Validators.required, Validators.email ]),
      'address': new FormControl('', [ Validators.required ]),
      'contact': new FormControl('', [ Validators.required ]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.purchaseCompleted()){
      this.purchaseTicketFormGroup.reset();
    }
  }

  changePaymentMethod(method: PaymentMethod): void{
    this.selectedPaymentMethod.set(method);
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
      option: this.selectedOption(),
      payment_method: this.selectedPaymentMethod()
    }
    this.purchaseFormDateEventEmitter.emit(ticketPurchaser);
  }

}
