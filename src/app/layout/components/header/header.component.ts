import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule
})
export class HeaderComponent implements OnInit {
  menuVisible = false;
  isLoggedIn = true; 
  isOwner = false; 
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  logout() {
    this.isLoggedIn = false;
    this.isOwner = false;
    this.router.navigate(['/sign-in']);
  }

}