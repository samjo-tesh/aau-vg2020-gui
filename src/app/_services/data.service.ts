import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {  }

  getPhds(){
    return this.httpClient.get(this.apiURL + '/phds');
  }

  getMScs() {
    return this.httpClient.get(this.apiURL + '/mscs');
  }

  getBScs() {
    return this.httpClient.get(this.apiURL + '/bscs');
  }
}
