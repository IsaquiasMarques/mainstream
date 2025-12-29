import { NgClass } from '@angular/common';
import { Component, input, OnInit, output, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'email-step',
  imports: [NgClass, ReactiveFormsModule],
  template: `
    <form class="" class="w-full" (submit)="this.submit()" [formGroup]="formGroup">
        <div class="form-container w-full flex flex-col gap-12 border border-[#E9E9E9] rounded-lg p-10">
            <div class="inputs flex flex-col gap-6">
                <div class="name input flex flex-col gap-y-3">
                    <label for="email" class="text-xs font-medium">Email</label>
                    <input type="text"
                    [ngClass]="{
                        'is-invalid': this.formGroup.get('email')?.invalid && this.formGroup.get('email')?.touched
                    }"
                    class="placeholder:text-xs duration-[.3s] text-xs placeholder:text-[#999] focus:outline-none p-[14px] text-[#999] bg-[#F8F8F8] border border-[#E9E9E9] rounded-lg"
                    formControlName="email" placeholder="" id="email" />
                    @if (this.formGroup.get('email')?.invalid && (this.formGroup.get('email')?.touched || this.formIsInvalid())) {
                        <small class="text-red-500">Verifique os dados deste campo</small>
                    }
                </div>
            </div>
            <div class="submit">
                <button type="submit" [disabled]="this.formGroup.invalid" class="min-w-[150px] w-full p-4 duration-[.3s] disabled:bg-(--primary)/70 disabled:cursor-auto cursor-pointer flex justify-center items-center bg-(--primary) text-white text-sm leading-4 rounded-lg">
                    @if (this.isLoading()) {
                      <img class="w-5 h-5" src="/loader.svg" alt="">
                    } @else {
                        Seguinte
                    }
                </button>
            </div>
        </div>
    </form>
  `,
  styles: ``,
})
export class EmailStepComponent implements OnInit {

  formGroup!: FormGroup;

  formIsInvalid = signal(false);
  formValues = output<any>();

  isLoading = input.required<boolean>();

  ngOnInit(): void {
      this.formGroup = new FormGroup({
        'email': new FormControl('', [ Validators.required ]),
      });
  }

  private validate(){
    if(this.formGroup.invalid){
      this.formIsInvalid.set(true);
    } else {
      this.formIsInvalid.set(false);
    }
  }

  submit(): void{
    this.validate();
    if(this.formIsInvalid()){
      return;
    }
    this.formValues.emit(this.formGroup.value);
  }

}
