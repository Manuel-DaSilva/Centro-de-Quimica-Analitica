import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Equipment } from "src/app/models/equipment.interface";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styles: []
})
export class EquipmentComponent implements OnInit {
  public equipment: Equipment[] = [
    {
      name: "Equipo 1"
    },
    {
      name: "Equipo 2"
    },
    {
      name: "Equipo 3"
    },
    {
      name: "Equipo 4"
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEquipment();
    // this.getInstruments();
  }

  /*
   * @desc handles the request to get the equipment data
   */
  getEquipment() {
    this.dataService.reqEquipment().subscribe(
      (res: Equipment[]) => {
        console.log(res);
        this.equipment = res;
      },
      err => {
        console.log("error getting equipment");
        console.log(err);
      }
    );
  }
}
