import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  constructor(
    private authService: AuthService,
    private toastService: ToastrService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  
  }

  /*
   * @desc handles the request to get user data and authenticated
   */
  login() {
    if (this.userForm.invalid) {
      return;
    }
    this.authService
      .login(
        this.userForm.controls["name"].value,
        this.userForm.controls["password"].value
      )
      .subscribe(
        (res: any) => {
          this.authService.setUser(res.user);
          this.router.navigate(["/admin", "dashboard"]);
          this.toastService.success("Inicio exito", "Bienvenido");
        },
        err => {
          console.log("error loggin in");
          console.log(err);
          this.toastService.error("Error al iniciar", "Los datos no coinciden");
        }
      );
  }
}
