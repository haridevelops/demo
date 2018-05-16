import { Component, OnInit, ViewChild } from '@angular/core';
import { System } from 'typescript';


@Component({
  selector: 'app-epic-sheet',
  templateUrl: './epic-sheet.component.html',
  styleUrls: ['./epic-sheet.component.css']
})
export class EpicSheetComponent implements OnInit {
  month = [];
  defaultValue = 'January';
  @ViewChild('bean') localBean;
  
  constructor() { }

  ngOnInit() {
    this.month.push('January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'
    );
  }
  
  onSubmit() {
    console.log(this.localBean.value.subs);
  }

}
