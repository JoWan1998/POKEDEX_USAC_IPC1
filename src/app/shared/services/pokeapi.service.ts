import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseHttp:String = environment.url_peticion;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('No se puede :c')
    }
    else{
      console.error('No te responde')
    }
    return throwError(error);
  }

  public getPokemons():Observable<any> {
    let url = `${this.baseHttp}/pokemon?limit=151&offset=0`
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  public getPokemon(data:any):Observable<any> {
    let url = `${this.baseHttp}/pokemon/${data}`
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }



}
