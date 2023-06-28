import { Commessa } from './commessa';
import { Risorsa } from './risorsa';
export class Rapportino {
  constructor(
    public id?: number,
    public numeroGiorni?: number,
    public risorsa?: Risorsa,
    public commessa?: Commessa
  ) {}
}
