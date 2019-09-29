import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../modules/admin/services/auth.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // validating user is logged
    if (this.authService.isUserLogged()) {
      console.log("open");
      return true;
    } else {
      this.router.navigate(["/admin", "login"]);
      this.toastService.error("Area protegida", "Por favor autenticar");
      return false;
    }
  }
}
