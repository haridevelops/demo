import { environment } from '../environments/environment';
import { Appmodal } from './app.modal';
import { TestModule } from './shared/app.test';
import { UploadComponent } from './upload/upload.component';
import { UploadModal } from './upload/upload.modal';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import * as firebase from 'firebase';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadService {
  
  private upload: TestModule[] = [];
  
  
  constructor(private http: Http) { }
  
  pushToStorage(uModal: UploadModal, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(uModal.file.name).put(uModal.file);
    
    ref.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        console.log(snap.bytesTransferred);
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes)) * 100
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        //success
        this.storeFile(uModal, ref.snapshot.downloadURL)
          .subscribe(
            (res: Response) => {console.log(res)},
            (error) => console.log(error)
          );
      }
    );

  }
  
  
  private storeFile(uModal: UploadModal, downloadURL: string) {
    //const headers = new Headers({'Content-Type': 'application/json'});
    const testModule = new TestModule(uModal.name, uModal.caption, downloadURL);
    this.upload.push(testModule);
    return this.http.post('https://angular-integraion.firebaseio.com/file_list.json', 
      this.upload.slice()); 
      //{headers}); 
  }
  
  getAllDetails() {
    //const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('https://angular-integraion.firebaseio.com/file_list.json')
      .map(
        (response: Response) => {
          const testModule: TestModule[] = response.json();
          return testModule;
        }
      )
      .subscribe(
        (recipes: TestModule[]) => {
          console.log(recipes[firebase.auth().currentUser.uid]);
        }
      );
    
  }
 
  
}
