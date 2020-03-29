import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public error = false;

  public quantity = {
    quotes: 13,
    equipment: 5,
    researches: 12,
    services: 16,
    categories: 5,
    members: 6
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.getSummary();
  }



}
