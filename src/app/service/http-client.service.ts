import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private _httpClient : HttpClient) { }

  getRequest<T>(url: string) : Observable<T> {
    return this._httpClient.get<T>(url);
  }
}
