import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-certificados-form',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule],
  templateUrl: './certificados-form.component.html',
  styleUrl: './certificados-form.component.css',
})
export class CertificadosFormComponent {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React', 'Vue'];
}
