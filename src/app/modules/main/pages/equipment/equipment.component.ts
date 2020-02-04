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
      id: "equiId",
      name: "equiName",
      category: {
        id: "catId",
        name: "catName"
      }
    },
    {
      id: "equiId2",
      name: "equiName2",
      category: {
        id: "catId",
        name: "catName"
      }
    },
    {
      id: "equiId3",
      name: "equiName3",
      category: {
        id: "catId2",
        name: "catName2"
      }
    },
  ];


  public equipmentByCategory = [];
  

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEquipment();
    // this.getInstruments();
    this.setEquipmentsByCat(this.equipment);
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

  setEquipmentsByCat(equipment: Equipment[]){
    let categories = [];
    let instruments = [];
    let result = [];
    equipment.forEach( equip => {

      let index = categories.indexOf(equip.category.name);
      if(index < 0){
        instruments = [];
        categories.push(equip.category.name);


        equipment.forEach(equip2 => {
          if(equip2.category.name === equip.category.name){
            instruments.push(equip.name);
          }
        });

        result.push({
          title: equip.category.name,
          instruments: instruments
        });

      }
    });
   
    this.equipmentByCategory = result;
  }

  
}
