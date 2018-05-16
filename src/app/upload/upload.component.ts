import { Appmodal } from '../app.modal';
import { TestModule } from '../shared/app.test';
import { UploadService } from '../upload.service';
import { UploadModal } from './upload.modal';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseType, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map';
import {FieldsetModule} from 'primeng/fieldset';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [AngularFireDatabase]
})
export class UploadComponent implements OnInit {

  @ViewChild('imageForm') form;
  //defaultImage: string= '/assets/download.jpg';
  selectedFile: File;
  uploadModal: UploadModal;
  currentFileUpload: UploadModal;
  progress: {percentage: number} ={percentage: 0};
  value: number =0;
  constructor(private http: HttpClient,
    private uploadService: UploadService) {}
    
    ngOnInit() {
  }
  onfileChanges(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit() {
    this.currentFileUpload = new UploadModal(this.selectedFile, this.form.value.Caption, this.form.value.name);
//    this.uploadService.storeFile(this.uploadModal)
//      .subscribe(
//        (error) => console.log(error),
//        (res: Response) => console.log(res));
    this.uploadService.pushToStorage(this.currentFileUpload, this.progress);
    
  }
  
  onGetAllData() {
    this.uploadService.getAllDetails();
  }
  
}
