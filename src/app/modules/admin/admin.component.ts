import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styles: []
})
export class AdminComponent implements OnInit {
  // references to sidebar and content elements for toggling sidebar
  @ViewChild("sidebar") sidebar: ElementRef;
  @ViewChild("content") content: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(["/admin", "login"]);
  }

  ngOnInit() {
  }

  /*
   *@desc toogles the left sidebar
   */
  toggleSidebar() {
    this.sidebar.nativeElement.classList.toggle("active");
    this.content.nativeElement.classList.toggle("active");
  }
}
