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
    
  ];

  public equipmentByCategory = [
    {
      title: "ESPECTROSCOPÍA",
      instruments: [
        "Espectrómetro de emisión óptica con plasma acoplado inductivamente,  Thermo Jarrell Ash,  IRIS- HR",
        "Espectrómetro de absorción atómica con horno de grafito, Perkin Elmer, Simaa 6000 ",
        "Espectrómetro de Absorción atómica con llama, Analityk Jena, NovAA350",
        "Espectrómetro de florescencia atómica, Analityk Jena, MERCUR PLUS",
        "Espectrómetro Uv-visible, THERMO, Genesys 10",
      ]
    },
    {
      title: "CROMATOGRAFÍA",
      instruments: [
        "HPLC, Hewlett Packard, Bomba HP 1100 y Detector IR HP 1047",
        "HPLC, HEWLETT  PACKARD, Serie 1100, Detector UV-Vis DAD, Detector UV-Vis, Detector de Fluorescencia",
        "Cromatógrafo de gases, Thermo Finnigan, Trace GC, AS 2000",
      ]
    },
    {
      title: "TRATAMIENTO DE MUESTRA",
      instruments: [
        "Digestor de microondas, CEM, MDS 2000, Microware digestion System",
        "Liofilizador, Labconco, Freezone",
        "Ultra Centrifuga, Eppendorf, Centrifuge 5804R",
        "Centrifuga, Thermo, IEC Centra Cl2",
        "Destilador de teflón Sub Boiling Point",
        "Mufla, NEY, Serie 2-160",
        "Estufa, Imperial, 3476",
        "Baños de ultrasonido",
        "Congelador, Thermo (-15ºC)",
        "Neveras",
      ]
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
