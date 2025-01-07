import { Injectable } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http';
// biome-ignore lint/style/useImportType: <explanation>
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
// biome-ignore lint/style/useImportType: <explanation>
import { Url } from '../model/url';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UrlService {
  serverUrl = environment.ServerURL;//'//localhost:4200';

  constructor(private http: HttpClient) { }

  findById(id: number | string): Observable<Url> {
    return this.http.get<Url>(`${this.serverUrl}/getById?id=${id}`)
      .pipe(retry(1),catchError(this.handleError));
  }

  save(url: string): Observable<Url> {
    return this.http.post<Url>(`${this.serverUrl}/save?originalUrl=${url}`, {})
      .pipe(retry(1),catchError(this.handleError));
  }

  handleError(error) {
    const errorMessage = `Error: ${error.error.message}`;

    window.alert(errorMessage);
    
    return of({id:"1",url:errorMessage});
  }
}
