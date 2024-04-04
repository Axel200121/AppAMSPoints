import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FooterComponent,BreadcrumbComponent],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent implements OnInit {

  listBreadcrumb: any[] =  [
    {
      route:'home',
      icon:"fa-house",
      name:"Dashboard"
    },
    {
      route:'home',
      icon:"fa-truck-field",
      name:"Proveedores"
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
