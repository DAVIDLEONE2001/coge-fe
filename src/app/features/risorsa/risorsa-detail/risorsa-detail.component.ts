import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from '../risorsa.service';

@Component({
  selector: 'cog-risorsa-detail',
  templateUrl: './risorsa-detail.component.html',
  styleUrls: ['./risorsa-detail.component.css']
})
export class RisorsaDetailComponent {

  risorsaDetail?: Risorsa;

  constructor(
    private activatedRoute: ActivatedRoute,
    private risorsaService: RisorsaService
  ) {}

  ngOnInit(): void {
    this.risorsaService.findById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    ).subscribe(atlObs => (this.risorsaDetail = atlObs));
  }

}
