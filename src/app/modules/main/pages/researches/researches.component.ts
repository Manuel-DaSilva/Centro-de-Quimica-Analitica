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


  public researchesByMembers = [
    {
      researcher: "Profesora 1",
      position: "Coordinadora",
      researches: [
        {
          name: "Ingestigacion 1 ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
        },
        {
          name: "Ingestigacion 2 ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
        },
        {
          name: "Ingestigacion 3 ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
        }
      ]
    },
    {
      researcher: "Profesor 2",
      position: "Director",
      researches: [
        {
          name: "Ingestigacion 3 ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
        },
        {
          name: "Ingestigacion 4 ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
        }
      ]
    },
    {
      researcher: "Profesora 3",
      position: "Directora",
      researches: [
        {
          name: "Ingestigacion 5 ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
        },
        {
          name: "Ingestigacion 10 ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!",
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
