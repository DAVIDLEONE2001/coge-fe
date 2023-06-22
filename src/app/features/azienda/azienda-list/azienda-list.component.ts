import { Component } from '@angular/core';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from '../azienda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cog-azienda-list',
  templateUrl: './azienda-list.component.html',
  styleUrls: ['./azienda-list.component.css']
})
export class AziendaListComponent {

  aziendaList?: Array<Azienda>;

  confirmMessage?: string;

  ngOnInit(): void {

    this.aziendaService.getAziende().subscribe(i=> this.aziendaList=i);
    this.route.queryParams.subscribe(params => {
      this.confirmMessage = params['confirmMessage'];
    });
}
constructor(private aziendaService: AziendaService, private route: ActivatedRoute){}

}
