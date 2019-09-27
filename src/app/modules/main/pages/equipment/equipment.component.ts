import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styles: []
})
export class EquipmentComponent implements OnInit {
  // !test data
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
  // !test data
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
  constructor() {}

  ngOnInit() {}
}
