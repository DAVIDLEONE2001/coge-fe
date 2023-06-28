import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Commessa } from 'src/app/model/commessa';

@Injectable({
  providedIn: 'root',
})
export class CommessaService {
  private commessaUrl = 'http://localhost:8080/api/commessa';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  listAll(): Observable<Commessa[]> {
    return this.http.get<Commessa[]>(this.commessaUrl).pipe(
      //tap(_ => this.log('fetched commesse')),
      catchError(this.handleError<Commessa[]>('getCommesse', []))
    );
  }

  /** POST: add a new hero to the server */
  insert(commessa: Commessa): Observable<Commessa> {
    return this.http
      .post<Commessa>(this.commessaUrl, commessa, this.httpOptions)
      .pipe(
        //tap((newAtleta: Atleta) => this.log(`added hero w/ id=${newAtleta.id}`)),
        catchError(this.handleError<Commessa>('addHero'))
      );
  }

  getCommessa(id: number): Observable<Commessa> {
    const url = `${this.commessaUrl}/${id}`;
    return this.http.get<Commessa>(url).pipe(
      // tap(_ => this.log(`fetched atleta id=${id}`)),
      catchError(this.handleError<Commessa>(`getCommessa id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateCommessa(commessa: Commessa): Observable<any> {
    const url = `${this.commessaUrl}/${commessa.id}`;
    return this.http.put(url, commessa, this.httpOptions).pipe(
      // tap(_ => this.log(`updated atleta id=${atleta.id}`)),
      catchError(this.handleError<any>('updateCommessa'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteCommessa(id: number): Observable<any> {
    const url = `${this.commessaUrl}/${id}`;

    return this.http
      .delete<Commessa>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Commessa>('deleteCommessa')));
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
