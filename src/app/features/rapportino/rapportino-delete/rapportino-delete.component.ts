import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rapportino } from 'src/app/model/rapportino';
import { RapportinoService } from '../rapportino.service';

@Component({
  selector: 'coge-rapportino-delete',
  templateUrl: './rapportino-delete.component.html',
  styleUrls: ['./rapportino-delete.component.css'],
})
export class RapportinoDeleteComponent implements OnInit {
  constructor(
    private rapportinoService: RapportinoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  rapportinoDelete?: Rapportino;

  ngOnInit(): void {
    this.rapportinoService
      .getRapportino(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((rapportino) => (this.rapportinoDelete = rapportino));
  }

  onBack(): void {
    this.router.navigate(['/rapportino/list']);
  }

  onConfermaDelete() {
    if (this.rapportinoDelete?.id) {
      this.rapportinoService
        .deleteRapportino(this.rapportinoDelete.id)
        .subscribe();
    }
    this.router.navigate(['rapportino/list']);
  }
}
