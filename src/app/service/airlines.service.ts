import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Airplane} from '../model/airplane';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {
  private url = environment.url;
  constructor(private httpClient: HttpClient) { }

  public getAirlines(): Observable<Airplane[]> {
    const headerDict = {
      'x-rapidapi-key': '57efd52f3emsha08b5f3566af53ap1ed917jsne0cdf41e2188',
      'x-rapidapi-host': 'iata-and-icao-codes.p.rapidapi.com',
      useQueryString: 'true'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.httpClient.get<Airplane[]>(this.url, requestOptions);
  }
}
