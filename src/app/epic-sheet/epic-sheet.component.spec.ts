import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicSheetComponent } from './epic-sheet.component';

describe('EpicSheetComponent', () => {
  let component: EpicSheetComponent;
  let fixture: ComponentFixture<EpicSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
