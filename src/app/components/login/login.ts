import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  constructor(private router: Router) {}
  login() {
    if (this.username === 'manoj' && this.password === 'manoj123') {
      this.router.navigate(['/dashboard']);
    }
    else {
      alert('Invalid username or password');
    }
  }
}