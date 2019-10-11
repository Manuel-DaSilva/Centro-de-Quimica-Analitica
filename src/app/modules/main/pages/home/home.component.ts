import { Component, OnInit } from "@angular/core";
import { Member } from "src/app/models/member.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  // !test data
  public carouselItems = [
    {
      title: "Facultad de quimica",
      desc:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit",
      imgUrl: "https://www.conncoll.edu/media/major-images/Chemistry.jpg"
    },
    {
      title: "Centro de quimica",
      desc:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit",
      imgUrl:
        "https://carleton.ca/chemistry/wp-content/uploads/banner-chemistry.jpg"
    },
    {
      title: "Quimica analitica",
      desc:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit",
      imgUrl:
        "http://www.utas.edu.au/tf-assets/media/images/Untitled-1-CHEMISTRY.2e16d0ba.fill-1200x600-c100_hGt8icS.jpg"
    }
  ];
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
