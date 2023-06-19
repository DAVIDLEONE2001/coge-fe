import { Attachment } from "./attachment";

export interface Risorsa {
  //Risorsa(id, nome, cognome, data_in, data_out, cf, email, costoGiornaliero, cv[attachment], commesse, rapportini);
  id:number;
  nome:string;
  cognome:string;
  data_in:Date;
  data_out:Date;
  cf:string;
  email:string;
  costoGiornaliero:number;
  cv:Attachment;
  commesse:string;
  rapportini:string;
}
