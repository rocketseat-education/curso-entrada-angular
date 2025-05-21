import { Routes } from '@angular/router';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { CertificadosFormComponent } from './pages/certificados-form/certificados-form.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';

export const routes: Routes = [
  {
    path: '',
    component: CertificadosComponent,
  },
  {
    path: 'certificados/novo',
    component: CertificadosFormComponent,
  },
  {
    path: 'certificados/:id',
    component: CertificadoComponent,
  },
];
