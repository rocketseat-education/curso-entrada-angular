import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css',
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];

  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.CertificadoService.certificados;
  }
}
