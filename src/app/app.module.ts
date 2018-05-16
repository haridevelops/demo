import { environment } from '../environments/environment';
import { AppRoutinModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Appmodal } from './app.modal';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SampleformComponent } from './sampleform/sampleform.component';
import { TdformComponent } from './tdform/tdform.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EpicSheetComponent } from './epic-sheet/epic-sheet.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UploadService } from './upload.service';
import { UploadComponent } from './upload/upload.component';
import { AngularFireModule, FirebaseApp, FirebaseAppName } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'Firebase';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { HomeComponent } from './home/home.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselModule, BsDropdownModule } from 'ngx-bootstrap';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StoreServiceService } from './store-service.service';



firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleformComponent,
    TdformComponent,
    EpicSheetComponent,
    DropdownDirective,
    UploadComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    Ng2CarouselamosModule,
    BrowserModule,
    FormsModule,
    AppRoutinModule,
    HttpModule,
    HttpClientModule,
    ProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FieldsetModule,
    ProgressBarModule
  ],
  providers: [ StoreServiceService, UploadService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
