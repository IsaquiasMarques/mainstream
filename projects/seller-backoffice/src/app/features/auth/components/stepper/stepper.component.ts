import { Component, input } from '@angular/core';
import { StepperDirective } from './stepper.directive';

@Component({
  selector: 'stepper',
  standalone: true,
  imports: [ StepperDirective ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  activeStep = input.required<number>();
}
