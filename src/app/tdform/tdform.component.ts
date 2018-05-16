
import { Appmodal } from '../app.modal';
import { StoreServiceService } from '../store-service.service';
import { HttpRequest } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseType, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {
  @ViewChild('bean') localBean;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultValue = 'Advanced';
  ifShow: boolean = false;
  appModal: Appmodal;

  constructor(private storeService: StoreServiceService){}
  ngOnInit() {
  }
  onSubmit() {
    const email = this.localBean.value.email;
    const password = this.localBean.value.password;
    const subs = this.localBean.value.subs;
    this.appModal = new Appmodal(email, subs, password);
    this.ifShow = true;
  }
  storeData() {
    this.storeService.storeData(this.appModal)
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );
  }
}