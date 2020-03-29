import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Investigation } from 'src/app/models/investigation.interface';
import { Member } from 'src/app/models/member.interface';

@Component({
  selector: "app-researches",
  templateUrl: "./researches.component.html",
  styles: []
})
export class ResearchesComponent implements OnInit {
  public researches: Investigation[] = [];
  public researchesByMembers = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getResearches();
  }

  /*
  * @desc handles the request to get the researches data
  */
  getResearches() {
    this.dataService.reqInvestigations().subscribe(
      (res: any) => {
        this.researches = res.data;
        this.setResearchesByMember();
        console.log(this.researchesByMembers);
        
      },
      err => {
        console.log("error getting researches");
        console.log(err);
      }
    );
  }

  setResearchesByMember(){
    let members = [];
    
    let researches = [];

    let result = [];
    this.researches.forEach( research => {

      let found = false;
      
      members.forEach(member => {
        if(member.name === research.name){
          found = true;
          return;
        }
      });

      if(!found){
        researches = [];
        

        members.push(research);


        this.researches.forEach(research2 => {
          if(research2.name === research.name){
            researches.push(research);
          }
        });

        result.push({
          member: research,
          researches: researches
        });

        

      }
    });
   
    this.researchesByMembers = result;
  }
  
}
