import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Rapportino } from 'src/app/model/rapportino';
import { RapportinoService } from '../rapportino.service';

@Component({
  selector: 'coge-rapportino-list',
  templateUrl: './rapportino-list.component.html',
  styleUrls: ['./rapportino-list.component.css'],
})
export class RapportinoListComponent implements OnInit {
  constructor(private rapportinoService: RapportinoService) {}

  subscription?: Subscription;

  confirmMessage: string = '';

  listaRapportini?: Rapportino[];

  ngOnInit(): void {
    this.subscription = this.rapportinoService
      .listAll()
      .subscribe((rapportiniList) => (this.listaRapportini = rapportiniList));
  }
}
