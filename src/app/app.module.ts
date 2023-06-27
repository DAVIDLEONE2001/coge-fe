import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { AziendaDetailComponent } from './features/azienda/azienda-detail/azienda-detail.component';
import { CommessaDetailComponent } from './features/commessa/commessa-detail/commessa-detail.component';
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { CommessaCreateComponent } from './features/commessa/commessa-create/commessa-create.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { RisorsaDetailComponent } from './features/risorsa/risorsa-detail/risorsa-detail.component';
import { FormsModule } from '@angular/forms';
import { RisorsaDeleteComponent } from './features/risorsa/risorsa-delete/risorsa-delete.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    RisorsaListComponent,
    AziendaListComponent,
    AziendaDetailComponent,
    CommessaDetailComponent,
    CommessaDeleteComponent,
    CommessaEditComponent,
    CommessaCreateComponent,
    CommessaListComponent,
    RisorsaDetailComponent,
    RisorsaDeleteComponent,
    RisorsaInsertComponent,
    RisorsaEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
