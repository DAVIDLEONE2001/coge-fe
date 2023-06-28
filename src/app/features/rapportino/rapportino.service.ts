import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Rapportino } from 'src/app/model/rapportino';

@Injectable({
  providedIn: 'root',
})
export class RapportinoService {
  private rapportinoUrl = 'http://localhost:8080/api/rapportino';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  listAll(): Observable<Rapportino[]> {
    return this.http.get<Rapportino[]>(this.rapportinoUrl).pipe(
      //tap(_ => this.log('fetched commesse')),
      catchError(this.handleError<Rapportino[]>('getRapportini', []))
    );
  }

  /** POST: add a new hero to the server */
  insertRapportino(rapportino: Rapportino): Observable<Rapportino> {
    return this.http
      .post<Rapportino>(this.rapportinoUrl, rapportino, this.httpOptions)
      .pipe(
        //tap((newAtleta: Atleta) => this.log(`added hero w/ id=${newAtleta.id}`)),
        catchError(this.handleError<Rapportino>('addHero'))
      );
  }

  getRapportino(id: number): Observable<Rapportino> {
    const url = `${this.rapportinoUrl}/${id}`;
    return this.http.get<Rapportino>(url).pipe(
      // tap(_ => this.log(`fetched atleta id=${id}`)),
      catchError(this.handleError<Rapportino>(`getRapportino id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateRapportino(rapportino: Rapportino): Observable<any> {
    const url = `${this.rapportinoUrl}/${rapportino.id}`;
    return this.http.put(url, rapportino, this.httpOptions).pipe(
      // tap(_ => this.log(`updated atleta id=${atleta.id}`)),
      catchError(this.handleError<any>('updateRapportino'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteRapportino(id: number): Observable<any> {
    const url = `${this.rapportinoUrl}/${id}`;

    return this.http
      .delete<Rapportino>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Rapportino>('deleteRapportino')));
  }

  rapportiniConRisorse(): Observable<Rapportino[]> {
    const url = `${this.rapportinoUrl}/$riepilogorapportini`;
    return this.http
      .get<Rapportino[]>(this.rapportinoUrl)
      .pipe(catchError(this.handleError<Rapportino[]>('getRapportini', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
