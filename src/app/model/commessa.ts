import { Azienda } from './azienda';
import { Risorsa } from './risorsa';
export interface Commessa {
  id: number;
  descrizione: string;
  codice: string;
  dataIn: Date;
  dataOut: Date;
  importo: number;
  azienda: Azienda;
  risorse: Risorsa[];
}
