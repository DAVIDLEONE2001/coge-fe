import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rapportino } from 'src/app/model/rapportino';
import { RapportinoService } from '../rapportino.service';

@Component({
  selector: 'coge-rapportino-detail',
  templateUrl: './rapportino-detail.component.html',
  styleUrls: ['./rapportino-detail.component.css'],
})
export class RapportinoDetailComponent implements OnInit {
  constructor(
    private rapportinoService: RapportinoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  rapportinoDetail?: Rapportino;

  ngOnInit(): void {
    this.rapportinoService
      .getRapportino(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((rapportino) => (this.rapportinoDetail = rapportino));
  }

  onBack(): void {
    this.router.navigate(['/rapportino/list']);
  }
}
