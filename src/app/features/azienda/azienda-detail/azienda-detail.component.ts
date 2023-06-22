import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from '../azienda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cog-azienda-detail',
  templateUrl: './azienda-detail.component.html',
  styleUrls: ['./azienda-detail.component.css']
})
export class AziendaDetailComponent implements OnInit{

//   aziendaList?: Array<Azienda>;

//   confirmMessage?: string;

   ngOnInit(): void {

//     this.aziendaService.getRisorse().subscribe(i=> this.aziendaList=i);
//     this.route.queryParams.subscribe(params => {
//       this.confirmMessage = params['confirmMessage'];
//     });
 }
// constructor(private aziendaService: AziendaService, private route: ActivatedRoute){}

}
