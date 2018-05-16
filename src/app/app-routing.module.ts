import { AuthGuardService } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleformComponent } from './sampleform/sampleform.component';
import { TdformComponent } from './tdform/tdform.component';
import { UploadComponent } from './upload/upload.component';

const appRoutes: Routes = [
  { path: 'sampleForm', component: SampleformComponent },
  { path: 'TDForm', component: TdformComponent },
  { path: 'uploadFile', component: UploadComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes) 
  ],
  exports: [RouterModule]
})

export class AppRoutinModule {
  
}