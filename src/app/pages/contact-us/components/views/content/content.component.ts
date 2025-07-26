import { NgClass } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactUsApiService } from '@core/api/contact-us.api.service';
import { ContactUsContract } from '@core/contracts/contact-us.contract';
import { PopUp, PopupStatus } from '@libraries/popup/popup.service';

@Component({
  selector: 'app-content',
  imports: [ ReactiveFormsModule, NgClass ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  contactClient = inject(ContactUsApiService);

  contactUsFormGroup!: FormGroup;
  formIsInvalid = signal(false);
  isSendingMessage = signal(false);
  popup = inject(PopUp);

  ngOnInit(): void {
    this.contactUsFormGroup = new FormGroup({
      'name': new FormControl('', [ Validators.required ]),
      'email': new FormControl('', [ Validators.required, Validators.email ]),
      'subject': new FormControl('', [ Validators.required ]),
      'phone_number': new FormControl('', [ Validators.required ]),
      'message': new FormControl('', [ Validators.required ]),
    });
  }

  private validate(){
    if(this.contactUsFormGroup.invalid){
      this.formIsInvalid.set(true);
    } else {
      this.formIsInvalid.set(false);
    }

  }

  submit(){

    this.validate();
    if(this.formIsInvalid()){
      return;
    }

    let message: ContactUsContract = {
      name: this.contactUsFormGroup.get('name')?.value,
      email: this.contactUsFormGroup.get('email')?.value,
      subject: this.contactUsFormGroup.get('subject')?.value,
      phone_number: this.contactUsFormGroup.get('phone_number')?.value,
      message: this.contactUsFormGroup.get('message')?.value,
    };

    this.isSendingMessage.set(true);
    this.contactClient.contact(message).subscribe({
      next: (response) => {
        if(response.status === HttpStatusCode.Ok)
          this.popup.add("A sua mensagem foi enviada com êxito. Entraremos em contacto em breve.", PopupStatus.SUCCESS);
          this.isSendingMessage.set(false)
          this.contactUsFormGroup.reset();
      },
      error: (error) => {

        // console.error(error);

        // if(error.status === HttpStatusCode.UnprocessableEntity){
        //   // const messages: string[] = [];

        //   for (const key in error.error.errors) {
        //     if (error.error.errors[key] && Array.isArray(error.error.errors[key])) {
        //       // messages.push(...error.error.errors[key]);
        //       this.popup.add(error.error.errors[key][0], PopupStatus.ERROR);
        //     }
        //   }
        // }

        this.popup.add("Ops! Ocorreu um erro ao tentar enviar esta mensagem para a nossa caixa de emails.", PopupStatus.ERROR);
        this.isSendingMessage.set(false)
      }
    });

  }

}
