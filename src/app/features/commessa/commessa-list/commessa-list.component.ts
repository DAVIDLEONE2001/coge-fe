import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commessa } from 'src/app/model/commessa';
import { CommessaService } from '../commessa.service';

@Component({
  selector: 'cog-commessa-list',
  templateUrl: './commessa-list.component.html',
  styleUrls: ['./commessa-list.component.css'],
})
export class CommessaListComponent implements OnInit {
  commessaList: Commessa[] = [];
  confirmMessage: string | undefined;

  constructor(
    private commessaService: CommessaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.commessaService.getCommessa().subscribe(
      (data: Commessa[]) => {
        this.commessaList = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
    this.route.queryParams.subscribe((params) => {
      this.confirmMessage = params['confirmMessage'];
    });
  }
}
