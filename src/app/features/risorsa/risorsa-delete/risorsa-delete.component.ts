import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from '../risorsa.service';

@Component({
  selector: 'cog-risorsa-delete',
  templateUrl: './risorsa-delete.component.html',
  styleUrls: ['./risorsa-delete.component.css'],
})
export class RisorsaDeleteComponent {

  risorsaDelete?: Risorsa;
  errorMessage?:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private risorsaService: RisorsaService
  ) {}

  ngOnInit(): void {
    this.risorsaService
      .findById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe((atlObs) => (this.risorsaDelete = atlObs));
  }

  delete() {
    if (this.risorsaDelete) {
      this.risorsaService.removeRisorsa(this.risorsaDelete.id).subscribe(
        () => {
          this.router.navigate(['/risorsa/list']);
        },
        error => {
          this.errorMessage = "Impossibile eliminare la risorsa.";
        }
      );

    }
  }
}
