import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}


  goToUrl() {
    this.router.navigateByUrl('http://localhost:8080/users?order=Discount&filter=brand');
  }
}
