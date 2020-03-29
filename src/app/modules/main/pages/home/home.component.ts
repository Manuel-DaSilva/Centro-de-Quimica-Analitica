import { Component, OnInit } from "@angular/core";
import { Member } from "src/app/models/member.interface";
import { DataService } from '../../services/data.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  // !test data
  public members: Member[] = []
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.dataService.reqMembers().subscribe(
      (res: any) => {
        console.log(res);
        this.members = res.data;

      },
      err => {
        console.log("error getting members");
        console.log(err);
      }
    );
  }
}
