import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaDetailComponent } from './features/commessa/commessa-detail/commessa-detail.component';
import { CommessaCreateComponent } from './features/commessa/commessa-create/commessa-create.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { RisorsaDetailComponent } from './features/risorsa/risorsa-detail/risorsa-detail.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'risorsa/list', component: RisorsaListComponent },
  { path: 'risorsa/:id', component: RisorsaDetailComponent },
  { path: 'azienda/list', component: AziendaListComponent },
  { path: 'commessa/list', component: CommessaListComponent },
  { path: 'commessa/detail/:id', component: CommessaDetailComponent },
  { path: 'commessa/create', component: CommessaCreateComponent },
  { path: 'commessa/edit/:id', component: CommessaEditComponent },
  { path: 'commessa/delete/:id', component: CommessaDeleteComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
