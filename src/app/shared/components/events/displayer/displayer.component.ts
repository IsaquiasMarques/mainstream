import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventComponent } from '@shared/templates/event/event.component';

@Component({
  selector: 'app-events-displayer',
  imports: [ EventComponent, RouterLink ],
  template: `
    <div class="section-content py-16">
      <div class="limited-container flex flex-col gap-[50px]">
          <ng-content select="section-header"></ng-content>

          <div class="events-container flex flex-col flex-wrap md:flex-row gap-[30px] md:gap-4 lg:gap-[30px] justify-start items-stretch">
              @for (event of events(); track $index) {
                  <app-event
                  class="w-full md:w-[355px] lg:w-[370px] xl-1230:!w-[calc(calc(100%/3)-20px)]"
                  [event]="event"
                  />
              }
          </div>
          @if (button().visible) {
            <div class="see-more flex justify-center">
                <button type="submit" [routerLink]="(!paginated()) ? button().route : null" class="text-white w-full xl:w-fit cursor-pointer font-medium rounded-lg !font-['Montserrat'] text-sm px-7 py-6 bg-(color:--primary)">
                    {{ button().label }}
                </button>
            </div>
          }
      </div>
  </div>
  `,
  styles: ``
})
export class DisplayerComponent {

  paginated = input.required<boolean>();
  limit = input<number>();

  button = input<Button>({
    visible: true,
    label: 'Ver mais Eventos',
    route: ['/events']
  });

  events = input<any[]>([]);
}

interface Button{
  visible: boolean,
  label?: string,
  route?: string[]
}