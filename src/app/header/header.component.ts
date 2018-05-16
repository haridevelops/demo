import { AuthService } from '../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private authService: AuthService){}
  
  onLogout() {
    this.authService.logout();
  }
}