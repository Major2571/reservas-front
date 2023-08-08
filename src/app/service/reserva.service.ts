import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reserva } from '../models/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getReservas(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.baseUrl + 'reservas')
  }

  getReservasById(id: number): Observable<Reserva>{
    return this.http.get<Reserva>(this.baseUrl + 'reservas' + id);
  }

  postReservas(obj: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(this.baseUrl + 'reservas', obj);
  }

  putReservas(obj: Reserva): Observable<Reserva>{
    return this.http.put<Reserva>(this.baseUrl + 'reservas/' + obj.id, obj);
  }

  putCancelarReservas(obj: Reserva): Observable<Reserva>{
    return this.http.delete<Reserva>(this.baseUrl + 'reservas/' + obj.id + '/cancelar');
  }

}
