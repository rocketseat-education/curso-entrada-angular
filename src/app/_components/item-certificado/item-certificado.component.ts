import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css',
})
export class ItemCertificadoComponent {
  id: string = '6';
  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', 2]);
  }
}
