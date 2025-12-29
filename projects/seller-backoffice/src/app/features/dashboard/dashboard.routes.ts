import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/dashboard.page').then(component => component.DashboardPage),
        title: 'Dashboard - Painel de Streaming'
    }
];