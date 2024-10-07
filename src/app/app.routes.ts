import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: '/keyboardList', pathMatch: 'full'
    },
    {
        path: 'mouseslist', loadComponent:() => import('./pages/mouse-list/mouse-list.component'),
    },
    {
        path: 'keyboardlist', loadComponent:() =>  import('./pages/keyboard-list/keyboard-list.component'),
    },
   
];
