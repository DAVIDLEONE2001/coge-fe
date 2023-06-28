import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rapportino } from 'src/app/model/rapportino';
import { Risorsa } from 'src/app/model/risorsa';
import { RapportinoService } from '../rapportino.service';
import { RisorsaService } from '../../risorsa/risorsa.service';

@Component({
  selector: 'coge-rapportino-edit',
  templateUrl: './rapportino-edit.component.html',
  styleUrls: ['./rapportino-edit.component.css'],
})
export class RapportinoEditComponent implements OnInit {
  rapportino: Rapportino = new Rapportino();
  errorMessage: string = '';
  listaRisorse?: Risorsa[];
  rapportinoEdit?: Rapportino;

  constructor(
    private rapportinoService: RapportinoService,
    private risorsaService: RisorsaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.rapportinoService.getRapportino(+id).subscribe({
        next: (rapportino) => {
          this.rapportino = rapportino;
        },
        error: (err) => (this.errorMessage = err),
      });
    }
    this.risorsaService.getRisorse().subscribe({
      next: (risorse) => (this.listaRisorse = risorse),
    });
  }

  update(rapportinoForm: NgForm): void {
    if (rapportinoForm.valid) {
      this.rapportinoService.updateRapportino(this.rapportino).subscribe({
        complete: () =>
          this.router.navigate([`rapportino/list`], {
            queryParams: {
              confirmMessage: 'Operazione effettuata correttamente.',
            },
          }),
      });
    } else {
      this.errorMessage =
        'Attenzione ! Operazione fallita! Il form non è stato validato';
    }
  }

  onBack(): void {
    this.router.navigate(['/rapportino/list']);
  }
}
