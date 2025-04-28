import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { ItemCertificadoComponent } from './_components/item-certificado/item-certificado.component';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, PrimaryButtonComponent, SecondaryButtonComponent, ItemCertificadoComponent, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
