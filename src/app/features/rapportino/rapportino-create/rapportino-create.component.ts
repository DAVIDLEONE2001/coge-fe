import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Commessa } from 'src/app/model/commessa';
import { Rapportino } from 'src/app/model/rapportino';
import { Risorsa } from 'src/app/model/risorsa';
import { CommessaService } from '../../commessa/commessa.service';
import { RapportinoService } from '../rapportino.service';
import { RisorsaService } from '../../risorsa/risorsa.service';

@Component({
  selector: 'coge-rapportino-create',
  templateUrl: './rapportino-create.component.html',
  styleUrls: ['./rapportino-create.component.css'],
})
export class RapportinoCreateComponent implements OnInit {
  rapportino: Rapportino = new Rapportino();
  errorMessage: string = '';

  constructor(
    private rapportinoService: RapportinoService,
    private risorsaService: RisorsaService,
    private commessaService: CommessaService,
    private router: Router
  ) {}

  listaRisorse?: Risorsa[];
  listaCommesse?: Commessa[];

  ngOnInit(): void {
    this.risorsaService.getRisorse().subscribe({
      next: (risorse) => (this.listaRisorse = risorse),
    });
    this.commessaService.listAll().subscribe({
      next: (commesse) => (this.listaCommesse = commesse),
    });
  }

  save(rapportinoForm: NgForm): void {
    console.log('sub' + JSON.stringify(this.rapportino));
    if (rapportinoForm.valid) {
      this.rapportinoService.insertRapportino(this.rapportino).subscribe({
        next: (rapportinoItem) => (this.rapportino = rapportinoItem),
        complete: () =>
          this.router.navigate([`rapportino/list`], {
            queryParams: {
              confirmMessage: 'Operazione effettuata correttamente.',
            },
          }),
      });
    } else
      this.errorMessage =
        'Attenzione ! Operazione fallita! Il form non è stato validato';
  }

  onBack(): void {
    this.router.navigate(['/rapportino/list']);
  }
}
