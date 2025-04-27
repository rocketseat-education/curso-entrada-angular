import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
