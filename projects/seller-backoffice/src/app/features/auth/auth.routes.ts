import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login.page').then(page => page.LoginPage),
        title: 'Entrar na minha conta'
    }
];