import { Component, inject, input, output, signal } from '@angular/core';
import { OtpInputComponent } from "../../otp-input/otp-input.component";
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'otp-step',
  standalone: true,
  imports: [OtpInputComponent, ReactiveFormsModule],
  template: `
    <form class="" (submit)="this.submit()" [formGroup]="formGroup">
        <div class="form-container flex flex-col gap-12 border border-[#E9E9E9] rounded-lg p-6 md:p-10">
            <div class="inputs">
                <div class="code input flex flex-col gap-y-3">
                    <label for="code" class="text-xs font-medium">Insira o código que recebeu no seu email</label>
                    <otp-input
                    [tailwindClasses]="['text-center', 'w-9', 'md:w-10', 'h-9', 'md:h-10', 'text-sm', 'md:text-base', 'bg-[#F8F8F8]', 'border', 'border-[#E9E9E9]', 'rounded-lg']"
                    [length]="6" (code)="insertCode($event)"></otp-input>
                </div>
            </div>
            <div class="submit flex justify-between items-center gap-3">
                <button type="submit" [disabled]="this.code().length < 6" class="min-w-[150px] duration-[.3s] disabled:bg-(--primary)/70 disabled:cursor-auto cursor-pointer w-full p-4 flex justify-center items-center bg-(--primary) text-white text-sm leading-4 rounded-lg">
                    @if (this.isLoading()) {
                      <img class="w-5 h-5" src="/loader.svg" alt="">
                    } @else {
                        Verificar e entrar
                    }
                </button>
            </div>
        </div>
    </form>
  `,
  styles: ``
})
export class OTPStepComponent {
  code = signal<string>('');

  formGroup!: FormGroup;
  formIsInvalid = signal(false);
  formValues = output<any>();

  isLoading = input.required<boolean>();

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'otp': new FormControl('', [ Validators.required ]),
    });
  }
  
  insertCode(event: string){
    this.code.set(event);
    this.formGroup.get('otp')?.setValue(event);
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
