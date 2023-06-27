import { Attachment } from "./attachment";
import { Commessa } from "./commessa";
import { Rapportino } from "./rapportino";

export interface Risorsa {
  id?:number;
  nome:string;
  cognome:string;
  dataIn:Date;
  dataOut:Date;
  codiceFiscale:string;
  email:string;
  costoGiornaliero:number;
  cv?:Attachment;
  commesse?:Array<Commessa>;//to-do
  rapportini?:Array<Rapportino>;//to-do
}
