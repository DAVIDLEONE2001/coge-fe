import { Attachment } from "./attachment";

export interface Risorsa {
  id:number;
  nome:string;
  cognome:string;
  data_in?:Date;
  data_out?:Date;
  cf:string;
  email:string;
  costoGiornaliero:number;
  cv:Attachment;
  commesse:string;//to-do
  rapportini:string;//to-do
}
