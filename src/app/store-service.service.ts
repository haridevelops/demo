import { Appmodal } from './app.modal';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class StoreServiceService {
  constructor(private http: Http) { }

  storeData(appModal: Appmodal) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angular-integraion.firebaseio.com/data_2604.json', 
      appModal, 
      {headers});
  }
}
