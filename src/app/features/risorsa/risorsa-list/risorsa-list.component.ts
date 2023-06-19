import { Component, Input, OnInit } from '@angular/core';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from '../risorsa.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'cog-risorsa-list',
  templateUrl: './risorsa-list.component.html',
  styleUrls: ['./risorsa-list.component.css'],
})
export class RisorsaListComponent implements OnInit{


  risorseList?: Array<Risorsa>;
  confirmMessage?: string;

    ngOnInit(): void {

      this.risorsaService.getRisorse().subscribe(i=> this.risorseList=i);
      this.route.queryParams.subscribe(params => {
        this.confirmMessage = params['confirmMessage'];
      });
  }
  constructor(private risorsaService: RisorsaService, private route: ActivatedRoute){}
}
