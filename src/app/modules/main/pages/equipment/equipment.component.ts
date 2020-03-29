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
  public equipmentByCategory = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEquipment();
    //this.getInstruments();
    //this.setEquipmentsByCat(this.equipment);
  }

  /*
   * @desc handles the request to get the equipment data
   */
  getEquipment() {
    this.dataService.reqEquipment().subscribe(
      (res: any) => {
        // console.log(res);
        this.equipment = res.data;

        this.setEquipmentsByCat();
        // this.equipment = res.data.map(item => {
        //   item['id'] = item._id.$oid;
        //   delete item['_id'];
        //   return item
        // });
      },
      err => {
        console.log("error getting equipment");
        console.log(err);
      }
    );
  }

  setEquipmentsByCat(){
    let categories = [];
    let instruments = [];
    let result = [];
    this.equipment.forEach( equip => {

      let index = categories.indexOf(equip.category_title);
      if(index < 0){
        instruments = [];
        categories.push(equip.category_title);


        this.equipment.forEach(equip2 => {
          if(equip2.category_title === equip.category_title){
            instruments.push(equip.title);
          }
        });

        result.push({
          title: equip.category_title,
          instruments: instruments
        });

      }
    });
   
    this.equipmentByCategory = result;
  }

  
}
