import { Component } from '@angular/core';
import { Attachment } from 'src/app/model/attachment';
import { Commessa } from 'src/app/model/commessa';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from '../risorsa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommessaService } from '../../commessa/commessa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cog-risorsa-edit',
  templateUrl: './risorsa-edit.component.html',
  styleUrls: ['./risorsa-edit.component.css'],
})
export class RisorsaEditComponent {
  risorsaNew: Risorsa = {
    id: undefined,
    nome: '',
    cognome: '',
    dataIn: new Date(),
    dataOut: new Date(),
    codiceFiscale: '',
    email: '',
    costoGiornaliero: 0,

    commesse: [],
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
    private commessaService: CommessaService,
    private activatedRoute: ActivatedRoute
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
    this.risorsaService
      .findById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe((atlObs) => (this.risorsaNew = atlObs!));

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
      const body = {
        id: this.risorsaNew.id,
        nome: this.risorsaNew.nome,
        cognome: this.risorsaNew.cognome,
        dataIn: this.risorsaNew.dataIn,
        dataOut: this.risorsaNew.dataOut,
        codiceFiscale: this.risorsaNew.codiceFiscale,
        email: this.risorsaNew.email,
        costoGiornaliero: this.risorsaNew.costoGiornaliero,
        cv: this.risorsaNew.cv,
        idsCommesse: this.idsCommesse,
        idsRapportini: this.idsRapportini,
      };
      console.log(body);
      this.risorsaService.editRisorsa(body).subscribe({
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
  updateIdsCommesse() {
    this.idsCommesse = this.commesse
      .filter((commessa) => commessa)
      .map((commessa) => commessa.id!);
  }
}
