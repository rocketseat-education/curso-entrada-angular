import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';

import { NavbarComponent } from './_components/navbar/navbar.component';






@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CommonModule,
    BaseUiComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
