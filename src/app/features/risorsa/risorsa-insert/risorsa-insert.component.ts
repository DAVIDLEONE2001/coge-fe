import { Component } from '@angular/core';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from '../risorsa.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Attachment } from 'src/app/model/attachment';

@Component({
  selector: 'cog-risorsa-insert',
  templateUrl: './risorsa-insert.component.html',
  styleUrls: ['./risorsa-insert.component.css'],
})
export class RisorsaInsertComponent {
  risorsaNew: Risorsa = {
    id: undefined,
    nome: '',
    cognome: '',
    dataIn: new Date(),
    dataOut: new Date(),
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
  errorMessage: string = '';

  constructor(private risorsaService: RisorsaService, private router: Router) {}

  save(risorsaForm: NgForm): void {
    if (risorsaForm.valid) {
      // this.risorsaNew.cv=this.cv
      console.log(this.risorsaNew)
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
        const payload: Uint8Array = new Uint8Array(fileReader.result as ArrayBuffer);
        const attachment: Attachment = {
          id: undefined,
          fileName: files[0].name,
          contentType: files[0].type,
          descrizione: 'tipo1',
          dataCreazione: new Date(),
          payload: Array.from(payload) // Converti Uint8Array in un array di numeri
        };
        this.risorsaNew.cv = attachment;
      };
      fileReader.readAsArrayBuffer(files[0]);
    }
  }
}
