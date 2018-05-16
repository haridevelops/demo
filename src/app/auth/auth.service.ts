import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;
  
  constructor(private router: Router) { }
  
  
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (error) => console.log('firebase auth error : ' + error)
      );
    this.router.navigate(['signin']);
  }
  
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response: Response) => {
          this.router.navigate(['home']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token) => this.token = token
            )
         }
      )
      .catch((error) => console.log(error));
  }
  
  isAuthenticated() {
    return this.token != null;
  }
  
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }
  
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
  
  
}