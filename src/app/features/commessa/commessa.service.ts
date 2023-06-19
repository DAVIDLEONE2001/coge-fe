import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

  getCommessa(): Observable<Commessa[]> {
    return this.http
      .get<Commessa[]>(this.commessaUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Commessa[]>('getCommessa', [])));
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
