import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayerComponent as EventDisplayer } from '@shared/components/events/displayer/displayer.component';
import { SearchComponent } from '@shared/components/events/search/search.component';
import { PageHeadComponent } from '@shared/components/page-head/page-head.component';

@Component({
  selector: 'app-events',
  imports: [ RouterLink, PageHeadComponent, SearchComponent, EventDisplayer ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
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
  ]
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
