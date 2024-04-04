import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FooterComponent,BreadcrumbComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {

  listBreadcrumb: any[] =  [
    {
      route:'home',
      icon:"fa-house",
      name:"Dashboard"
    },
    {
      route:'home',
      icon:"fa-user-group",
      name:"clientes"
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
