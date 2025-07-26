import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CheckoutContract } from "@core/contracts/checkout.contract";
import { TicketPurchaser } from "@core/models/purchaser.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PurchaseTicket{

    constructor (private http: HttpClient) {}
    
    purchaseTicket(ticketPurchaser: TicketPurchaser, checkout: CheckoutContract): Observable<any>{
        const purchase = {
            ...ticketPurchaser,
            quantity: checkout.quantity
        }
        return this.http.patch(`${environment.server}/api/v1/client/purchase/ticket/${checkout.ticket.uuid}`, purchase, { observe: 'response' });
    }

}