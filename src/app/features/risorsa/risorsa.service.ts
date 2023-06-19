import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Risorsa } from 'src/app/model/risorsa';

@Injectable({
  providedIn: 'root'
})
export class RisorsaService {
  private risorsaUrl = 'http://localhost:8080/api/risorsa';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRisorse(): Observable<Array<Risorsa>> {
    return this.http
      .get<Array<Risorsa>>(this.risorsaUrl)
      .pipe(catchError(this.handleError<Risorsa[]>('getRisorsa', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
