import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Investigation } from 'src/app/models/investigation.interface';

@Component({
  selector: "app-researches",
  templateUrl: "./researches.component.html",
  styles: []
})
export class ResearchesComponent implements OnInit {

  public researchesByMembers = [
    {
      researcher: "Dra. María de los Ángeles Álvarez González",
      position: "Jefe del Laboratorio de Espectrometría de Absorción Atómica",
      researches: [
        {
          name: "Determinación de niveles base y biacumulación de metales pesados",
          description: "Niveles base del contenido de metales pesados en esponjas, algas y sedimentos en el ambiente marino de Isla de Aves (Venezuela). Bioacumulación de metales pesados en esponjas marinas y sedimentos en ambientes afectados por la industria petrolera en Venezuela.",
        },
        {
          name: "Evaluación del riesgo y distribución espacial de metales pesados",
          description: "Evaluación del riesgo ambiental por metales pesados en costas de Venezuela empleando biomonitores. Evaluación del riesgo y distribución espacial del Cadmio y otros metales pesados en suelos venezolanos de cultivo de cacao, sus frutos y derivados con destino a la exportación",
        }
      ]
    },
    {
      researcher: "Dra. Rosa María Amaro Fernandes",
      position: "Jefe del Laboratorio de Separaciones Cromatográficas",
      researches: [
        {
          name: "Desarrollo y validación de métodos analíticos para el pre-tratamiento de muestras y análisis con sistemas espectroscópicos y cromatográficos",
          description: "Desarrollo de métodos analíticos por HPLC para la determinación de ácido fítico en cereales infantiles. Desarrollo de métodos de tratamiento de muestra para el estudio de compuesto orgánicos persistente por GC-MS y HPLC en alimentos, suelos y agua. Desarrollo de métodos analíticos para la retención selectiva  y especiación de metales tóxicos",
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
    this.dataService.reqInvestigationsByMember().subscribe(
      (res: any) => {
        this.researchesByMembers = res.data;
      },
      err => {
        console.log("error getting researches");
        console.log(err);
      }
    );
  }
  
}
