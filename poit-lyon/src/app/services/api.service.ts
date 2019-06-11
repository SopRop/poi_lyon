import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPoi(code_postal: number): Observable<any> {
    return this.http.get('http://localhost:5000/api/v1/poi/' + code_postal)
  }
}
