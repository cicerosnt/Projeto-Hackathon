import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultAuthGuard } from './auth-guards/default-auth.guard';
import { InternalAuthGuard } from './auth-guards/internal-auth.guard';
import { OutsourcedAuthGuard } from './auth-guards/outsourced-auth.guard';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { AuthenticationComponent } from './views/common/authentication/authentication.component';
import { CompanyContractsComponent } from './views/internal/company-contracts/company-contracts.component';
import { CompanyRegistrationComponent } from './views/internal/company-registration/company-registration.component';
import { RegisteredCompaniesComponent } from './views/internal/company/registered-companies/registered-companies.component';
import { ContractFormFieldsComponent } from './views/internal/contract-form-fields/contract-form-fields.component';
import { ContractInfoComponent } from './views/internal/contract-info/contract-info.component';
import { DocumentsValidationComponent } from './views/internal/documents-validation/documents-validation.component';
import { ProfileComponent } from './views/internal/profile/profile.component';
import { OutsourcedCompanyContractsComponent } from './views/outsourced/outsourced-company-contracts/outsourced-company-contracts.component';
import { PendingDocsComponent } from './views/outsourced/pending-docs/pending-docs.component';
import { SentDocsComponent } from './views/outsourced/sent-docs/sent-docs.component';

const routes: Routes = [
  {
    path: 'autenticacao',
    component: AuthenticationComponent,
    canActivate: [DefaultAuthGuard],
  },
  {
    path: 'interno',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: 'empresas',
        component: RegisteredCompaniesComponent,
        data: {title: 'Empresas Cadastradas'}
      },
      {
        path: 'empresas/cadastrar',
        component: CompanyRegistrationComponent,
        data: {title: 'Cadastro de Empresa'}
      },
      {
        path: 'empresas/:companyCNPJ',
        component: CompanyRegistrationComponent,
        data: {title: 'Cadastro da Empresa'}
      },
      {
        path: 'empresas/:companyCNPJ/contratos',
        component: CompanyContractsComponent,
        data: {title: 'Contratos da Empresa'}
      },
      {
        path: 'contratos/:contractId',
        component: ContractInfoComponent,
        data: {title: 'Infrmações do Contrato'}
      },
      {
        path: 'contratos/:contractId/formulario',
        component: ContractFormFieldsComponent,
        data: {title: 'Solicitação de Documentos'}
      },
      {
        path: 'contratos/:contractId/validar-documentos',
        component: DocumentsValidationComponent,
        data: {title: 'Validação de Documentos'}
      },
      {
        path: 'perfil',
        component: ProfileComponent,
        data: {title: 'Meu Perfil'}
      },
    ],
    canActivate: [InternalAuthGuard],
    data: {title: 'Dashboard'}
  },
  {
    path: 'externo',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: 'contratos',
        component: OutsourcedCompanyContractsComponent,
        data: {title: 'Contratos da Empresa'}
      },
      {
        path: 'contratos/:contractId/documentos/pendentes',
        component: PendingDocsComponent,
        data: {title: 'Envio de Documentos'}
      },
      {
        path: 'contratos/:contractId/documentos/enviados',
        component: SentDocsComponent,
        data: {title: 'Documentos Enviados'}
      },
    ],
    canActivate: [OutsourcedAuthGuard],
  },
  {
    path: '**',
    redirectTo: 'autenticacao',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
