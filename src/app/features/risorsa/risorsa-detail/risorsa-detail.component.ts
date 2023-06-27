import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from '../risorsa.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cog-risorsa-detail',
  templateUrl: './risorsa-detail.component.html',
  styleUrls: ['./risorsa-detail.component.css'],
})
export class RisorsaDetailComponent {
  risorsaDetail?: Risorsa;

  constructor(
    private activatedRoute: ActivatedRoute,
    private risorsaService: RisorsaService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.risorsaService
      .findById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe((atlObs) => (this.risorsaDetail = atlObs));
  }

  base64ToArrayBuffer(base64: string) {
    const binaryString = window.atob(base64); // Comment this if not using base64
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
  }

  createAndDownloadBlobFile(
    body: any,
    filename: any,
    extension = this.getExtension(this.risorsaDetail!.cv!.contentType)
  ) {
    const blob = new Blob([body]);
    const fileName = `${filename}.${extension}`;

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    // Browsers that support HTML5 download attribute
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  downloadCV(id: number) {
    const arrayBuffer = this.base64ToArrayBuffer(
      String(this.risorsaDetail!.cv!.payload)
    );
    this.createAndDownloadBlobFile(
      arrayBuffer,
      this.risorsaDetail!.cv!.fileName
    );
  }

  getExtension(key: string): any {
    const predefinedMap = new Map([
      ['application/msword', 'doc'],
      ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'docx'],
      ['application/pdf', 'pdf'],
      ['text/plain', 'txt'],
      ['application/rtf', 'rtf'],
      ['text/html', 'html'],
      ['application/xml', 'xml'],
      ['application/vnd.ms-powerpoint', 'ppt'],
      ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'pptx'],
      ['application/vnd.ms-excel', 'xls'],
      ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx'],
    ]);

    const value = predefinedMap.get(key);
    if (value !== undefined) {
      return value;
    }
    throw new Error(`Key "${key}" not found in predefined map`);
  }
}
