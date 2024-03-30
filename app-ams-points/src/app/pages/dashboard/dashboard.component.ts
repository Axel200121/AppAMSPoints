import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {
    initFlowbite();
  }

}
