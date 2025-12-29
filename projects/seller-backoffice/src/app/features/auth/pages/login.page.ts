import { Component, inject, signal } from '@angular/core';
import { StepperComponent } from '../components/stepper/stepper.component';
import { EmailStepComponent } from "../components/steps/email-step/email-step.component";
import { OTPStepComponent } from "../components/steps/otp-step/otp-step.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpStatusCode } from '@angular/common/http';
import { PopUp, PopupStatus } from '@seller-backoffice-core/libs/popup/popup.service';
import { AuthFacade } from '../auth.facade';
import { RequestOTP } from '../auth.models';
import { authProviders } from '../auth.providers';
import { User } from '@seller-backoffice-core/entities/user.entity';
import { UserService } from '@seller-backoffice-core/services/user.service';

@Component({
  selector: 'app-login',
  imports: [StepperComponent, OTPStepComponent, EmailStepComponent],
  providers: [ ...authProviders() ],
  template: `
  <div class="login-container h-dvh flex justify-center items-center">
    <div class="auth-panel w-ful max-w-[337px] md:max-w-[400px] pb-9 flex flex-col gap-4">
      <div class="logo flex justify-center items-center mb-3">
        <img src="/logo.svg" class="h-9" alt="">
      </div>
      <div class="header flex justify-between items-center">
        <div class="goback">
          @if (activeStep() > 1) {
            <button (click)="goToStep(activeStep() - 1)" class=" cursor-pointer text-sm font-bold">
              Voltar um passo
            </button>
          }
        </div>
        <div class="additionals text-[#999] text-sm">
            <span class="text-black!">{{ activeStep() }}/</span>2 Passos
        </div>
      </div>
      <div class="panel-content w-full bg-white">
          <stepper [activeStep]="this.activeStep()">
              <div class="step-1 w-[337px] md:w-[400px]">
                  <email-step [isLoading]="isLoading() && activeStep() === 1" (formValues)="emailStepFormGroup($event)"></email-step>
              </div>
              <div class="step-2 w-[337px] md:w-[400px]">
                  <otp-step [isLoading]="isLoading() && activeStep() === 2" (formValues)="otpStepFormGroup($event)"></otp-step>
              </div>
          </stepper>
      </div>
    </div>
  </div>
  `,
  styles: `
  `
})
export class LoginPage {
  activeStep = signal<number>(1);
  alert = inject(PopUp);
  private authFacade = inject(AuthFacade);
  private userService = inject(UserService);
  isLoading = signal<boolean>(false);

  signInWithOTPFormGroup!: FormGroup;

  ngOnInit(): void {
    this.signInWithOTPFormGroup = new FormGroup({});
  }

  goToStep(step: number): void{
    this.activeStep.set(step);
  }

  emailStepFormGroup(formValues: any): void{
    this.signInWithOTPFormGroup.addControl('email', new FormControl(formValues.email, [ Validators.required, Validators.email ]));
    const email = this.signInWithOTPFormGroup.get('email')?.value;
    this.isLoading.set(true);
    
    this.requestOTPCode(email).subscribe({
      next: response => {
        if(response.status === HttpStatusCode.Accepted)
          this.alert.add("Foi enviado um código para o seu email", PopupStatus.SUCCESS);
          this.isLoading.set(false);
          this.goToStep(2);
      },
      error: error => {
        if(error.status === HttpStatusCode.UnprocessableEntity){
          for (const key in error.error.errors) {
            if (error.error.errors[key] && Array.isArray(error.error.errors[key])) {
              // messages.push(...error.error.errors[key]);
              this.alert.add(error.error.errors[key][0], PopupStatus.ERROR);
            }
          }
        } else {
          this.alert.add("Não foi possível completar a sua solicitação neste momento", PopupStatus.ERROR);
        }
        this.isLoading.set(false);
      }
    });
  }

  otpStepFormGroup(formValues: any): void{
    this.signInWithOTPFormGroup.addControl('otp', new FormControl(formValues.otp));
    this.validateAndSignIn(this.signInWithOTPFormGroup);
  }

  private requestOTPCode(email: string): Observable<any>{
    const data: RequestOTP = {email}
    return this.authFacade.requestOTP(data);
  }

  private validateAndSignIn(formGroup: FormGroup): void{
    this.isLoading.set(true);
    this.authFacade.loginWithOTP(formGroup.value).subscribe({
      next: response => {
        if(response.status === HttpStatusCode.Ok){

          const user: User = new User();
          user.create(response.user.name, response.user.email, response.token);
          this.userService.setUser(user).authenticate();
          
          this.isLoading.set(false);
        }
      },
      error: error => {
        if(error.status === HttpStatusCode.UnprocessableEntity){
          for (const key in error.error.errors) {
            if (error.error.errors[key] && Array.isArray(error.error.errors[key])) {
              // messages.push(...error.error.errors[key]);
              this.alert.add(error.error.errors[key][0], PopupStatus.ERROR);
            }
          }
        }else if(error.status === HttpStatusCode.Unauthorized){
            this.alert.add(error.error.message, PopupStatus.ERROR);
        } else {
          this.alert.add("Não foi possível completar a sua solicitação neste momento", PopupStatus.ERROR);
        }
        this.isLoading.set(false);
      }
    });
  }
}
