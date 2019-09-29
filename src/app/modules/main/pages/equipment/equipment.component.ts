import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styles: []
})
export class EquipmentComponent implements OnInit {
  public instruments = [
    {
      name: "Instrumento 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    },
    {
      name: "Instrumento 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    },
    {
      name: "Instrumento 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    },
    {
      name: "Instrumento 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    }
  ];
  public equipment = [
    {
      name: "Equipo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    },
    {
      name: "Equipo 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    },
    {
      name: "Equipo 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    },
    {
      name: "Equipo 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto quibusdam autem facere velit! Sapiente quae magni non? Magnam veritatis nemo ratione vero fuga deleniti aliquam fugiat voluptatum consequatur numquam!"
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getEquipment();
    // this.getInstruments();
  }

  /*
   * @desc handles the request to get the equipment data
   */
  getEquipment() {
    this.dataService.reqEquipment().subscribe(
      (res: any) => {
        this.equipment = res.data;
      },
      err => {
        console.log("error getting equipment");
        console.log(err);
      }
    );
  }

  /*
   * @desc handles the request to get the equipment data
   */
  getInstruments() {
    this.dataService.reqInstruments().subscribe(
      (res: any) => {
        this.instruments = res.data;
      },
      err => {
        console.log("error getting instruments");
        console.log(err);
      }
    );
  }
}
