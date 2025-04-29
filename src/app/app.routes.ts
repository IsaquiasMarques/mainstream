import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/components/container/home.component').then(component => component.HomeComponent),
        title: 'Mainstream - Página inicial'
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then(component => component.AboutUsComponent),
        title: 'Saiba tudo sobre nós - Mainstream',
    },
    {
        path: 'events',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/events/components/container/events.component').then(component => component.EventsComponent),
                title: 'Acompanhe todos os eventos',
            },
            {
                path: 'category/:category',
                loadComponent: () => import('./pages/events/components/container/events.component').then(component => component.EventsComponent),
                title: 'Acompanhe todos os eventos desta categoria',
            },
            {
                path: 'details/:event',
                loadComponent: () => import('./pages/event-details/components/container/event-details.component').then(component => component.EventDetailsComponent),
                title: 'Detalhes do evento'
            }
        ],
    },
    {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout.component').then(component => component.CheckoutComponent),
        title: 'Finalize a suma compra',
    },
    {
        path: 'faq',
        loadComponent: () => import('./pages/faq/faq.component').then(component => component.FaqComponent),
        title: 'Perguntas frequentes'
    },
    {
        path: 'create-account',
        loadComponent: () => import('./pages/create-account/create-account.component').then(component => component.CreateAccountComponent),
        title: 'Crie a sua conta e venda connosco',
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact-us/contact-us.component').then(component => component.ContactUsComponent),
        title: 'Entre em contacto connosco'
    }
];
