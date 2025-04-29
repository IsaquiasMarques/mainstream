import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventComponent } from '@shared/templates/event/event.component';

@Component({
  selector: 'app-events-displayer',
  imports: [ EventComponent, RouterLink ],
  template: `
    <div class="section-content py-16">
      <div class="limited-container flex flex-col gap-[50px]">
          <div class="content flex flex-col gap-12">
              <div class="title text-center flex flex-col items-center gap-2">
                  <h6 class="text-base xl:text-xl !font-['Montserrat']">
                      Eventos
                  </h6>
                  <h1 class="font-semibold text-2xl xl:max-w-[550px] xl:text-4xl !font-['Unigeo']">
                      Garanta já o seu lugar no evento que mais combina com você!
                  </h1>
              </div>
          </div>

          <div class="events-categories">
              <div class="categories flex flex-wrap gap-2 justify-center items-center">
                  @for (category of categories; track $index) {
                      <div class="category">
                          <a [routerLink]="['/events/category/' + category.slug]" class=" text-sm !font-['Montserrat'] block w-fit px-7 py-3 border-[0.5px] rounded-full duration-75 border-[#020B26] text-[#020B26] hover:border-(color:--primary) hover:text-(color:--primary)">
                              {{ category.name }}
                          </a>
                      </div>
                  }
              </div>
              <div class="events-container"></div>
          </div>

          <div class="events-container flex flex-col flex-wrap md:flex-row gap-[30px] md:gap-4 lg:gap-[30px] justify-start items-stretch">
              @for (event of events; track $index) {
                  <app-event
                  class="w-full md:w-[355px] lg:w-[370px] xl-1230:!w-[calc(calc(100%/3)-20px)]"
                  [event]="event"
                  />
              }
          </div>
          <div class="see-more flex justify-center">
              <button type="submit" [routerLink]="(!paginated()) ? ['/events'] : null" class="text-white cursor-pointer w-full xl:w-fit cursor-pointer font-medium rounded-lg !font-['Montserrat'] text-sm px-7 py-6 bg-(color:--primary)">
                  {{ buttonLabel() }}
              </button>
          </div>
      </div>
  </div>
  `,
  styles: ``
})
export class DisplayerComponent {

  paginated = input.required<boolean>();
  buttonLabel = input<string>('Ver mais Eventos');

  categories: any[] = [
    {
      id: 1,
      name: 'Artes e Teatro',
      slug: 'artes-e-teatro',
    },
    {
      id: 2,
      name: 'Cinema',
      slug: 'cinema',
    },
    {
      id: 3,
      name: 'Brunch',
      slug: 'brunch',
    },
    {
      id: 4,
      name: 'Concertos',
      slug: 'concertos',
    },
    {
      id: 5,
      name: 'Conferências e Workshops',
      slug: 'conferencias-e-workshops',
    },
    {
      id: 6,
      name: 'Desporto',
      slug: 'desporto',
    },
    {
      id: 7,
      name: 'Eventos Corporativos',
      slug: 'eventos-corporativos',
    },
    {
      id: 8,
      name: 'Família',
      slug: 'familia',
    },
    {
      id: 9,
      name: 'Feiras',
      slug: 'feiras',
    },
    {
      id: 10,
      name: 'Festas',
      slug: 'festas',
    },
    {
      id: 11,
      name: 'Festivais',
      slug: 'festivais',
    },
    {
      id: 12,
      name: 'Formação Online',
      slug: 'formacao-online',
    },
  ];

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
  ];
}
