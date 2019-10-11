import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Investigation } from 'src/app/models/investigation.interface';

@Component({
  selector: "app-researches",
  templateUrl: "./researches.component.html",
  styles: []
})
export class ResearchesComponent implements OnInit {
  public researches: Investigation[] = [
    {
      name: "Ingestigacion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
      researches: [
        "Profesora 1",
        "Investigador 2",
        "investigador 3",
        "Profesor"
      ]
    },
    {
      name: "Ingestigacion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
      researches: [
        "Profesora 1",
        "Investigador 2",
        "investigador 3",
        "Profesor"
      ]
    },
    {
      name: "Ingestigacion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
      researches: [
        "Profesora 1",
        "Investigador 2",
        "investigador 3",
        "Profesor"
      ]
    },
    {
      name: "Ingestigacion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
      researches: [
        "Profesora 1",
        "Investigador 2",
        "investigador 3",
        "Profesor"
      ]
    },
    {
      name: "Ingestigacion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
      researches: [
        "Profesora 1",
        "Investigador 2",
        "investigador 3",
        "Profesor"
      ]
    }
  ];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getResearches();
  }

  /*
   * @desc handles the request to get the researches data
   */
  getResearches() {
    this.dataService.reqInvestigations().subscribe(
      (res: Investigation[]) => {
        this.researches = res;
      },
      err => {
        console.log("error getting researches");
        console.log(err);
      }
    );
  }
}