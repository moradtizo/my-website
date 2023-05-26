
import { UntypedFormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Category, CategoryService, ResCategory } from '@codinwziro/shared';

@Component({
  selector: 'blog-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    id=""
    form :Category [] = []
    categories: Category[] | undefined=[]
    constructor(private categoryService: CategoryService,private route: ActivatedRoute, private location: Location){}

    categoryForm = new FormGroup({
      label: new UntypedFormControl('', [Validators.required]),
      icon: new UntypedFormControl('', [Validators.required, Validators.pattern(/[a-zA-Z-]*/)]),
      color: new UntypedFormControl(),
    })
    ngOnInit(): void {
        this.getCategories()
        this.route.params.subscribe((params: any) => {
          this.categoryService.getCategory(params.id).subscribe(res => {
            this.id = params.id
            this.categoryForm.patchValue(res.categories)
          })
      })

    }

    getCategories(){
      this.categoryService.getAllCategories().subscribe((res: ResCategory) => this.categories = res.categories);
    }
    submit(form: FormGroup) {

      if(form.invalid) {
        return
      }

      this.updateCategory()

    }
    updateCategory() {
      this.categoryService.updateCategory(this.id, this.categoryForm.value).subscribe(res =>
        
        {
        if(res.success) {
         this.location.back()
        }
      },
      err => console.error(err)
      )
    }

  }














