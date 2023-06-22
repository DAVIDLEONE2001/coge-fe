import { Attachment } from "./attachment";

export interface Risorsa {
  id:number;
  nome:string;
  cognome:string;
  dataIn?:Date;
  dataOut?:Date;
  codiceFiscale:string;
  email:string;
  costoGiornaliero:number;
  cv:Attachment;
  commesse:string;//to-do
  rapportini:string;//to-do
}
