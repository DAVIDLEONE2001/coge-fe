import { Risorsa } from "./risorsa";

export interface Attachment {
  // Attachment(id, fileName, contentType, descrizione, dataCreazione, payload, risorsa)
  id:number;
  fileName:string;
  contentType:string;
  descrizione:string;
  dataCreazione:Date;
  payload:Uint8Array;
  risorsa:Risorsa;
}
