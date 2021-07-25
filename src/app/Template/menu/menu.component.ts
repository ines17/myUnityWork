import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.router.navigate(['/login']);
}
  logout(){
    this.authService.logout();

        this.router.navigate(['/login']);

  }
}
