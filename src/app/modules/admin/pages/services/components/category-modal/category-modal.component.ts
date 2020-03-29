import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { CategoryService } from 'src/app/modules/admin/services/category.service';
// models
import { Category } from 'src/app/models/equipment.category.interface';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
})
export class CategoryModalComponent implements OnInit {

  public mode: string;
  public categoryForm: FormGroup;
  public invalidAttempt = false;
  public category: Category;
  // input fields
  @Input()
  set inputCategoryData(category: Category) {
    this.setCategory(category);
    this.category = category;
  }
  constructor(
    private activeModal: NgbActiveModal,
    private categoryService: CategoryService,
    private toastService: ToastrService
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  /*
   * @desc handle the type of action over the category
   * @param category to edit
   */
  setCategory(category: Category) {
    if (category) {
      this.mode = "edit";
      this.setForEdit(category);
    } else {
      this.mode = "create";
    }
  }

  /*
   * @desc sets the icoming data of the category on the forms
   * @param category to be edited
   */
  setForEdit(category: Category) {
    this.categoryForm.controls["name"].setValue(category.name);
  }

  /*
   * @desc handle the petition to edit the category
   * @param category to edit
   */
  editCategory() {
    if(this.categoryForm.invalid){
      this.invalidAttempt = true;
      return;
    }

    let category = this.categoryForm.value;
    category.id = this.category.id;

    // edit code
    this.categoryService.updateCategory(category).subscribe(
      res => {
        this.toastService.success("correctamente", "Categoria actualizada");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error updating category");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al editar la categoria"
        );
      }
    );
  }

  /*
   * @desc handle the petition to create a category
   */
  createCategory() {
    if(this.categoryForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    this.categoryService.createCategory(this.categoryForm.value).subscribe(
      res => {
        this.toastService.success("correctamente", "categoria creada");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error creating category");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al crear la categoria"
        );
      }
    );
  }

  closeModal() {
    this.activeModal.close();
  }

}
