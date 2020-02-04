import { Component, OnInit } from "@angular/core";
import { Member } from "src/app/models/member.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  // !test data
  public members: Member[] = [
    {
      name: "Dra. María de los Ángeles Álvarez González",
      email: "maria.alvarez@ciens.ucv.ve - maria.maralvar@gmail.com",
      phonenumber: "+58 (0212) 6051321",
      position: "Profesor Titular, Coordinadora del CQA",
      cv: "../../../../assets/cv/CVMariaAAlvarez.pdf",
      image: "./assets/images/team/image2.jpg"
    },
    {
      name: "Dra. Rosa María Amaro Fernandes",
      email: "rosa.amaro@ciens.ucv.ve - amarorosa@yahoo.com",
      phonenumber: "123456789",
      position: "Profesor Asociado",
      cv: "../../../../assets/cv/CVRosaAmaro.pdf",
      image: "./assets/images/team/image4.png"
    },
    {
      name: "Lic. Rafael Golding",
      email: "rafaelgolding@gmail.com",
      phonenumber: "123456789",
      position: "Profesor Instructor",
      cv: "",
      image: "https://static.thenounproject.com/png/17241-200.png"
    },
    {
      name: "Dra. Nereida Carrión",
      email: "nereida.carrion@ciens.ucv.ve - nereida.carrion@gmail.com",
      phonenumber: "123456789",
      position: "Profesor Titular (Jubilada)",
      cv: "../../../../assets/cv/Nereidacarrión.pdf",
      image: "./assets/images/team/image3.jpg"
    },
    {
      name: "Lic. Gustavo Pérez",
      email: "gperez88@hotmail.com",
      phonenumber: "+58 (0212) 6934977",
      position: "Jefe de la División de Servicios",
      cv: "",
      image: "https://static.thenounproject.com/png/17241-200.png"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
