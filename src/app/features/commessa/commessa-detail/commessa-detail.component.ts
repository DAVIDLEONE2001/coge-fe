import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommessaService } from '../commessa.service';
import { Commessa } from 'src/app/model/commessa';

@Component({
  selector: 'cog-commessa-detail',
  templateUrl: './commessa-detail.component.html',
  styleUrls: ['./commessa-detail.component.css'],
})
export class CommessaDetailComponent implements OnInit {
  commessaDetail?: Commessa;

  constructor(
    private route: ActivatedRoute,
    private commessaService: CommessaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.commessaService.findById(id).subscribe(
      (commessa: Commessa | undefined) => {
        this.commessaDetail = commessa;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onBack() {
    this.router.navigate(['/commessa/list']);
  }
}
