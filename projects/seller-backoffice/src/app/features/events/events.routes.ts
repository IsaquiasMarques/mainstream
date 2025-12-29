import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/event-list.page').then(page => page.EventListPage),
        title: 'Eventos agendados para streaming'
    }
];