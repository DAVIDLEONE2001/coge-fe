import { Attachment } from "./attachment";
import { Commessa } from "./commessa";

export interface Risorsa {
  id:number;
  nome:string;
  cognome:string;
  dataIn:Date;
  dataOut:Date;
  codiceFiscale:string;
  email:string;
  costoGiornaliero:number;
  cv:Attachment;
  commesse:Array<Commessa>;//to-do
  rapportini:string;//to-do
}
