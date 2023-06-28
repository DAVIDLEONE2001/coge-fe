import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from '../risorsa.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Attachment } from 'src/app/model/attachment';
import { CommessaService } from '../../commessa/commessa.service';
import { Commessa } from 'src/app/model/commessa';

@Component({
  selector: 'cog-risorsa-insert',
  templateUrl: './risorsa-insert.component.html',
  styleUrls: ['./risorsa-insert.component.css'],
})
export class RisorsaInsertComponent implements OnInit {
  risorsaNew: Risorsa = {
    id: undefined,
    nome: '',
    cognome: '',
    dataIn: new Date(),
    dataOut: undefined,
    codiceFiscale: '',
    email: '',
    costoGiornaliero: 0,
    cv: {
      id: 0,
      fileName: '',
      contentType: '',
      descrizione: '',
      dataCreazione: new Date(),
      payload: [],
    },
  };

  commessaSearch?: string;
  commesse: Commessa[] = [];
  commesseFiltrate: Commessa[] = [];
  idsCommesse: number[] = [];
  idsRapportini: number[] = [];

  descrizioneFile: string = 'default';
  errorMessage: string = '';

  constructor(
    private risorsaService: RisorsaService,
    private router: Router,
    private commessaService: CommessaService
  ) {}
  filterCheckboxes(): void {
    if (this.commessaSearch) {
      this.commesseFiltrate = this.commesse.filter((commessa) => {
        commessa.descrizione
          .toLowerCase()
          .includes(this.commessaSearch!.toLowerCase());
      });
    } else this.commesseFiltrate = this.commesse;
  }
  ngOnInit(): void {
    this.commessaService.listAll().subscribe({
      next: (commesse) => {
        this.commesse = commesse;
        this.commesseFiltrate = commesse;
      },
    });
  }

  save(risorsaForm: NgForm): void {
    if (risorsaForm.valid) {
      // this.risorsaNew.cv=this.cv
      console.log(this.risorsaNew);

      this.risorsaService.addRisorsa(this.risorsaNew).subscribe({
        next: (risorsaItem) => (this.risorsaNew = risorsaItem),
        complete: () =>
          this.router.navigate([`risorsa/list`], {
            queryParams: {
              confirmMessage: 'Operazione effettuata correttamente.',
            },
          }),
      });
    } else
      this.errorMessage =
        'Attenzione! Operazione fallita! Il form non è stato validato';
  }
  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  handleCVFile(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const arrayBuffer: ArrayBuffer = fileReader.result as ArrayBuffer;
        const uintArray = new Uint8Array(arrayBuffer);
        const payload: number[] = Array.from(uintArray);

        const attachment: Attachment = {
          id: undefined,
          fileName: files[0].name,
          contentType: files[0].type,
          descrizione: this.descrizioneFile,
          dataCreazione: new Date(),
          payload: payload,
        };

        this.risorsaNew.cv = attachment;
      };
      fileReader.readAsArrayBuffer(files[0]);
    }
  }
}
