import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultImage: string = '/assets/download.jpg'
  selectedFile: File;
  public navbarCollapsed = true;
  
  constructor(private http: HttpClient) {}
  
  onfileChanges(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit() {
    console.log("theh");
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://angular-integraion.appspot.com', fd)
      .subscribe(res => {
        console.log(res);
      });
  }
  
}
