import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { CommessaDetailComponent } from './features/commessa/commessa-detail/commessa-detail.component';
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { CommessaCreateComponent } from './features/commessa/commessa-create/commessa-create.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    RisorsaListComponent,
    CommessaListComponent,
    CommessaEditComponent,
    CommessaDetailComponent,
    CommessaDeleteComponent,
    CommessaCreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
