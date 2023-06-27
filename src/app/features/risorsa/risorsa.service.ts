import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Risorsa } from 'src/app/model/risorsa';

@Injectable({
  providedIn: 'root',
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
      .pipe(catchError(this.handleError));
  }

  addRisorsa(risorsa: Risorsa): Observable<Risorsa> {
    // atleta.id = this.getNextId();
    // this.atletiDBMock.push(atleta);
    // return of(atleta);
    return this.http
      .post<Risorsa>(this.risorsaUrl, risorsa, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  findById(id: number): Observable<Risorsa | undefined> {
    // return of(this.atletiDBMock.find((atleta: Atleta) => atleta.id === id));
    const url = `${this.risorsaUrl}/${id}`;
    return this.http.get<Risorsa>(url).pipe(catchError(this.handleError));
  }

  removeRisorsa(id: number): Observable<any> {
    // this.atletiDBMock = this.atletiDBMock.filter(
    //   (atleta: Atleta) => atleta.id !== id
    // );
    const url = `${this.risorsaUrl}/${id}`;

    return this.http
      .delete<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  editRisorsa(risorsa: any): Observable<Risorsa> {
    const url = `${this.risorsaUrl}/${risorsa.id}`;
    return this.http
      .put<Risorsa>(url, risorsa, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
