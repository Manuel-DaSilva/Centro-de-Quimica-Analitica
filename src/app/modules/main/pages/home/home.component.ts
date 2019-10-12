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
      name: "Andres Enrique",
      email: "email@email.com",
      phone: "1286282627262",
      position: "Profesor Titular",
      cv: "url/download/cv/andresdcv",
      imagePath: "https://source.unsplash.com/random/200x200"
    },
    {
      name: "Andres Enrique",
      email: "email@email.com",
      phone: "1286282627262",
      position: "Profesor Titular",
      cv: "url/download/cv/andresdcv",
      imagePath: "https://source.unsplash.com/random/200x200"
    },
    {
      name: "Andres Enrique",
      email: "email@email.com",
      phone: "1286282627262",
      position: "Profesor Titular",
      cv: "url/download/cv/andresdcv",
      imagePath: "https://source.unsplash.com/random/200x200"
    },
    {
      name: "Andres Enrique",
      email: "email@email.com",
      phone: "1286282627262",
      position: "Profesor Titular",
      cv: "url/download/cv/andresdcv",
      imagePath: "https://source.unsplash.com/random/200x200"
    },
    {
      name: "Andres Enrique",
      email: "email@email.com",
      phone: "1286282627262",
      position: "Profesor Titular",
      cv: "url/download/cv/andresdcv",
      imagePath: "https://source.unsplash.com/random/200x200"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
