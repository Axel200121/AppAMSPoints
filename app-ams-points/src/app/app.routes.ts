import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Error500Component } from './pages/errors/error-500/error-500.component';
import { Error404Component } from './pages/errors/error-404/error-404.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path:"home",
        component:DashboardComponent
    },
    {
        path:"",
        component:AuthComponent
    },
    {
        path:"products",
        component:ProductsComponent
    },
    {
        path:"sin-acceso",
        component:Error500Component
    },
    {
        path:"**",
        component:Error404Component
    }

];
