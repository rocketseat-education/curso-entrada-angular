import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { CertificadoService } from '../../_services/certificado.service';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})
export class CertificadoComponent implements OnInit {
  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    console.log(this.CertificadoService.certificados);
  }
}
