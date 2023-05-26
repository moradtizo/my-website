import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from '@codinwziro/shared';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';


@Component({
  selector: 'blog-add-category',
  templateUrl: './add-ctegory.component.html',
  styleUrls: ['./add-ctegory.component.scss']
})
export class AddCtegoryComponent  {
form :Category [] = []
  categoryForm = new FormGroup({
    label : new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[0-9a-zA-Z]*')]),
    icon : new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
    color : new UntypedFormControl('',Validators.required ),

 })
  constructor(private categoryService:CategoryService, private router: Router){}


  postCategory(){
    if(this.categoryForm.valid){
const{label,icon,color} = this.categoryForm.value
    this.categoryService.postCategories({label,icon,color}).subscribe((response: Category) => {
      this.form = [...this.form,response]
     this.categoryForm.reset()
     this.router.navigate(['/blog/category'])

    })
    }

  }





}

