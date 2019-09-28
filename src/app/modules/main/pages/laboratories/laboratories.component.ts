import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-laboratories",
  templateUrl: "./laboratories.component.html",
  styleUrls: []
})
export class LaboratoriesComponent implements OnInit {
  // !test
  public laboratories = [
    {
      name: "lab 1",
      description: "lab1"
    },
    {
      name: "lab 2",
      description: "lab2"
    },
    {
      name: "lab 3",
      description: "lab3"
    },
    {
      name: "lab 4",
      description: "lab4"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
