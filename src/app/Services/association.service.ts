import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:8000/api';

@Injectable()
export class AssociationService {

  constructor(private http: HttpClient) { }

  findByPage(p: number, size: number, filter: string): Observable<any> {
    let params = new HttpParams()
      .set('page', String(p)).set('pageSize', String(size));
    if (!filter || filter === '') {
      const url = `${apiUrl}`;
      return this.http.get<any>(url, {params});
    } else {
      const url = `${apiUrl}/search`;
      params = params.set('filter', String(filter));
      return this.http.get<any>(url, {params});
    }
  }

  findAll(): Observable<any> {
    const url = `${apiUrl}/getAssociation`;
    return this.http.get<any>(url);
  }

  getById(id: number) {
    const url = `${apiUrl}/associations/${id}`;
    return this.http.get<any>(url);
  }

  create(association: any) {
    return this.http.post<any>(apiUrl + '/associations', association, httpOptions);
  }

  update(id: number, association: any) {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, association, httpOptions);
  }

  delete(id: number) {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
