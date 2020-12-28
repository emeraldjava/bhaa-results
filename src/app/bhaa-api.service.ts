import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

/**
 * https://www.jsmount.com/angular-http-request-testing/
 * https://stackoverflow.com/questions/39714432/angular-2-https-request
 */
@Injectable({
  providedIn: 'root'
})
export class BhaaApiService {

  constructor(private http: HttpClient) {
  }

  getRacesHttpRequest() {
    return this.http.get(environment.restApi.uri+'/race');
  }


}
