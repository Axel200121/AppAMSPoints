import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FooterComponent,BreadcrumbComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

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
