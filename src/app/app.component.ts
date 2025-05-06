import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { ItemCertificadoComponent } from './_components/item-certificado/item-certificado.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';
import { CertificadosFormComponent } from './pages/certificados-form/certificados-form.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CommonModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ItemCertificadoComponent,
    BaseUiComponent,
    CertificadosComponent,
    CertificadosFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
