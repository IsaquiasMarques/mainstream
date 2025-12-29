import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(routes => routes.routes)
    },
    {
        path: 'my-account',
        canActivate: [ authGuard ],
        loadComponent: () => import('./core/layout/seller-layout.component').then(component => component.SellerLayoutComponent),
        children: [
            {
                path: '',
                redirectTo: '/my-account/events',
                pathMatch: 'full'
            },
            // {
            //     path: 'dashboard',
            //     loadChildren: () => import('./features/dashboard/dashboard.routes').then(routes => routes.routes)
            // },
            {
                path: 'events',
                loadChildren: () => import('./features/events/events.routes').then(routes => routes.routes)
            },
            {
                path: 'streaming',
                loadChildren: () => import('./features/streaming/streaming.routes').then(routes => routes.routes)
            }
        ]
    }
];
