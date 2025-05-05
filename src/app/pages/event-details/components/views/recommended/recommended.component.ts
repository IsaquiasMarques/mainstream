import { Component } from '@angular/core';
import { DisplayerComponent } from '@shared/components/events/displayer/displayer.component';

@Component({
  selector: 'app-recommended',
  imports: [ DisplayerComponent ],
  template: `
    <app-events-displayer [button]="{ visible: false }" [paginated]="false" [events]="events">
        [events]="events">
        <div class="section-header flex flex-col gap-[50px]" ngProjectAs="section-header">
            <div class="content flex flex-col gap-12">
                <div class="title text-left flex flex-col items-start gap-2">
                    <h6 class="text-base xl:text-xl !font-['Montserrat']">
                      Mais eventos que podem te interessar
                    </h6>
                    <h1 class="font-semibold text-2xl xl:max-w-[550px] xl:text-4xl !font-['Unigeo']">
                      Garanta seu ingresso agora mesmo!
                    </h1>
                </div>
            </div>
        </div>
    </app-events-displayer>
  `,
  styles: ``
})
export class RecommendedComponent {
  events: any[] = [
    {
      image: '/assets/images/events/event.png',
      title: 'Mulheres e as tecnotecnologias',
      slug: 'mulheres-e-as-tecnotecnologias',
      category: [
        {
          id: 2,
          name: 'Artes e Teatro',
          slug: 'artes-e-teatro',
        }
      ],
      date: '20 de Agosto pelas 19 horas',
      locations: [
        {
          location: 'Luanda, Angola'
        }
      ]
    },
    {
      image: '/assets/images/events/event.png',
      title: 'Mulheres e as tecnotecnologias',
      slug: 'mulheres-e-as-tecnotecnologias',
      category: [
        {
          id: 2,
          name: 'Artes e Teatro',
          slug: 'artes-e-teatro',
        }
      ],
      date: '20 de Agosto pelas 19 horas',
      locations: [
        {
          location: 'Luanda, Angola'
        }
      ]
    },
    {
      image: '/assets/images/events/event.png',
      title: 'Mulheres e as tecnotecnologias',
      slug: 'mulheres-e-as-tecnotecnologias',
      category: [
        {
          id: 2,
          name: 'Artes e Teatro',
          slug: 'artes-e-teatro',
        }
      ],
      date: '20 de Agosto pelas 19 horas',
      locations: [
        {
          location: 'Luanda, Angola'
        }
      ]
    }
  ];
}
