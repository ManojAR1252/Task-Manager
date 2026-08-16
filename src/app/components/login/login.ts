import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    if (
      this.username === 'manoj' &&
      this.password === '123'
    ) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials');
    }

  }
}
