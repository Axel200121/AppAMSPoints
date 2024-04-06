import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FooterComponent,BreadcrumbComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  listBreadcrumb: any[] =  [
    {
      route:'home',
      icon:"fa-house",
      name:"Dashboard"
    },
    {
      route:'home',
      icon:"fa-users",
      name:"Usuarios"
    },
    {
      route:'home',
      icon:"fa-clipboard-list",
      name:"Ajustes de roles"
    },
  ]

  modalTitle!:string;


  ngOnInit(): void {
    initFlowbite();
  }

  openSaveModalUser(){
    this.modalTitle = "Agrega"
  }

  openEditarModalUser(){
    this.modalTitle="Modifica"
  }

}
