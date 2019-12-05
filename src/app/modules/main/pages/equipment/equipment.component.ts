import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Equipment } from "src/app/models/equipment.interface";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styles: []
})
export class EquipmentComponent implements OnInit {
  public equipment: Equipment[];

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
      (res: any) => {
        console.log(res);
        this.equipment = res.data.map(item => {
          item['id'] = item._id.$oid;
          delete item['_id'];
          return item
        });
      },
      err => {
        console.log("error getting equipment");
        console.log(err);
      }
    );
  }
}
