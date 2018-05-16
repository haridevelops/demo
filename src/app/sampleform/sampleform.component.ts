import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {

  @ViewChild('bean') bean;
  genders = ['Male', 'Female'];
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.bean);
    console.log(this.bean.value.nameInput);
    console.log(this.bean.value.emailInput);
    console.log(this.bean.value.numberInput);
  }
  
  suggestName() {
    this.bean.form.patchValue({
      nameInput: 'Suggested Name'
    });
  }
}
