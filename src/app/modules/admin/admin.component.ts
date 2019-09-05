import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styles: []
})
export class AdminComponent implements OnInit {
  // references to sidebar and content elements for toggling sidebar
  @ViewChild("sidebar") sidebar: ElementRef;
  @ViewChild("content") content: ElementRef;

  // date variable for clock
  public date = new Date();

  constructor() {}

  ngOnInit() {
    // updating clock
    setInterval(() => {
      this.date = new Date();
    }, 60000);
  }

  /*
   *@desc toogles the left sidebar
   */
  toggleSidebar() {
    this.sidebar.nativeElement.classList.toggle("active");
    this.content.nativeElement.classList.toggle("active");
  }
}
