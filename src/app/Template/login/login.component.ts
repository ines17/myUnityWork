import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  login(forms) {
    this.auth.login(forms).subscribe((success) => {
      if (success) {
        this.router.navigate(['/home']);
      }
    });
  }
}
