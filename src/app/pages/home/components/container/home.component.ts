import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { FootComponent } from "../views/foot/foot.component";
import { SearchComponent } from '@shared/components/events/search/search.component';
import { DisplayerComponent as EventsDisplayer } from '@shared/components/events/displayer/displayer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent, SearchComponent, EventsDisplayer, FootComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
