import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-certificados-form',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './certificados-form.component.html',
  styleUrl: './certificados-form.component.css',
})
export class CertificadosFormComponent {}
