import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Investigation } from 'src/app/models/investigation.interface';

@Component({
  selector: "app-researches",
  templateUrl: "./researches.component.html",
  styles: []
})
export class ResearchesComponent implements OnInit {

  public researchesByMembers: Investigation[] = [
    {
      researcher: "Lider",
      position: "Posicion",
      researches: [
        {
          name: "inve1",
          description: "desc1",
        },
        {
          name: "inve2",
          description: "desc2",
        }
      ]
    },
    {
      researcher: "Lider2",
      position: "Posicion2",
      researches: [
        {
          name: "inve3",
          description: "desc1",
        },
        {
          name: "inve4",
          description: "desc2",
        }
      ]
    }
  ]
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getResearches();
  }

  /*
  * @desc handles the request to get the researches data
  */
  getResearches() {
    this.dataService.reqInvestigationsByMember().subscribe(
      (res: any) => {
        this.researchesByMembers = res.data;
      },
      err => {
        console.log("error getting researches");
        console.log(err);
      }
    );
  }
  
}
