import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ville } from '../models/Ville';
import {Contact} from '../models/Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  apiUrl ='http://127.0.0.1:8000';

  getVilles() : Observable<any>{
    return this.http.get<any[]>(`${this.apiUrl}/formation/villes/`);
}

register(contact: Contact) {
  return this.http.post(`${this.apiUrl}/formation/contacts/`, contact);
}

getFormations():Observable<any>{
  return this.http.get(`${this.apiUrl}/formation/formations/`);
}


}
