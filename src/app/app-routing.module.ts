import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'risorsa/list', component: RisorsaListComponent },
  { path: 'azienda/list',component: AziendaListComponent},
  // { path: 'libro/create', component: LibroCreateComponent },
  // { path: 'libro/:id', component: LibroDetailComponent },
  // { path: 'libro/edit/:id', component: LibroEditComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
