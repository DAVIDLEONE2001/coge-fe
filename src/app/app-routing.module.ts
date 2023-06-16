import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  // { path: 'libro/list', component: LibroListComponent },
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
