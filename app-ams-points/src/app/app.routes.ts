import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Error500Component } from './pages/errors/error-500/error-500.component';
import { Error404Component } from './pages/errors/error-404/error-404.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { RolesComponent } from './pages/usuarios/roles/roles.component';
import { LocalComponent } from './pages/usuarios/local/local.component';

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
        path:"clients",
        component:ClientsComponent
    },
    {
        path:"users",
        component:UsuariosComponent
    },
    {
        path:"roles",
        component:RolesComponent
    },
    {
        path:"local",
        component:LocalComponent
    },
    {
        path:"providers",
        component:ProvidersComponent
    },
    {
        path:"expenses",
        component:ExpensesComponent
    },
    {
        path:"sales",
        component:SaleComponent
    },
    {
        path:"reports",
        component:ReportsComponent
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
