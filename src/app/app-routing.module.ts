import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaDetailComponent } from './features/commessa/commessa-detail/commessa-detail.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'risorsa/list', component: RisorsaListComponent },
  { path: 'azienda/list', component: AziendaListComponent },
  { path: 'commessa/list', component: CommessaListComponent },
  { path: 'commessa/detail/:id', component: CommessaDetailComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
