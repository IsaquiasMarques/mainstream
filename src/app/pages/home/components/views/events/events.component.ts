import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EventComponent } from '@shared/templates/event/event.component';

@Component({
  selector: 'app-events',
  imports: [ RouterLink, RouterLinkActive,EventComponent ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  events: any[] = [
    {
      image: '/assets/images/events/event.png',
      title: 'Mulheres e as tecnotecnologias ',
      slug: 'mulheres-e-as-tecnotecnologias ',
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
      title: 'Mulheres e as tecnotecnologias ',
      slug: 'mulheres-e-as-tecnotecnologias ',
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
      title: 'Mulheres e as tecnotecnologias ',
      slug: 'mulheres-e-as-tecnotecnologias ',
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
      title: 'Mulheres e as tecnotecnologias ',
      slug: 'mulheres-e-as-tecnotecnologias ',
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
      title: 'Mulheres e as tecnotecnologias ',
      slug: 'mulheres-e-as-tecnotecnologias ',
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
      title: 'Mulheres e as tecnotecnologias ',
      slug: 'mulheres-e-as-tecnotecnologias ',
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
