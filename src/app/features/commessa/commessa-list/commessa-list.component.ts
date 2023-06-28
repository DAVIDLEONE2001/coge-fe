import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Commessa } from 'src/app/model/commessa';
import { CommessaService } from '../commessa.service';

@Component({
  selector: 'coge-commessa-list',
  templateUrl: './commessa-list.component.html',
  styleUrls: ['./commessa-list.component.css'],
})
export class CommessaListComponent implements OnInit {
  constructor(private commessaService: CommessaService) {}

  subscription?: Subscription;

  confirmMessage: string = '';

  listaCommesse?: Commessa[];

  ngOnInit(): void {
    this.subscription = this.commessaService
      .listAll()
      .subscribe((commesseList) => (this.listaCommesse = commesseList));
  }

  // ngOnDestroy(): void {
  //   // Annulla la sottoscrizione per evitare memory leak
  //   this.subscription?.unsubscribe();
  // }
}
