import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Azienda } from 'src/app/model/azienda';

@Injectable({
  providedIn: 'root'
})
export class AziendaService {
  
  private aziendaUrl = 'http://localhost:8080/api/azienda';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAziende(): Observable<Array<Azienda>> {
    return this.http
      .get<Array<Azienda>>(this.aziendaUrl)
      .pipe(catchError(this.handleError<Azienda[]>('getAzienda', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
  