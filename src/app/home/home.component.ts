import { TestModule } from '../shared/app.test';
import { UploadService } from '../upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [];
  activeSlideIndex = 0;
 
  constructor(private uploadService: UploadService) {

  }
 
 
  
  ngOnInit() {

  }

}
