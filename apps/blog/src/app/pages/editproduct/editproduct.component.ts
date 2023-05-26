import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Category, CategoryService, ResCategory } from '@codinwziro/shared';
import { Location } from '@angular/common'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProductService } from 'libs/shared/src/lib/services/product.service';


@Component({
  selector: 'blog-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  id=""
  thumbnail : any ;
  categories: Category[] | undefined=[]
  constructor(private categoryService: CategoryService,private productService:ProductService,private route: ActivatedRoute,private location:Location){}
  editProductForm = new FormGroup({
    title : new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[0-9a-zA-Z]*')]),
    description : new UntypedFormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(20)]),
    content:new UntypedFormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(20)]),
    brand: new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[0-9a-zA-Z]*')]),
    countStock : new UntypedFormControl('',Validators.required),
    price:new UntypedFormControl('',Validators.required),
    category:new UntypedFormControl('',Validators.required),
  })
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.productService.getProduct(params.id).subscribe(res => {
        this.id = params.id
        this.editProductForm.patchValue(res.products)
      })
  })
    this.getCategories();
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return ;
        }
        this.thumbnail = file;
  }
}

  getCategories(){
    this.categoryService.getAllCategories().subscribe((res: ResCategory) => this.categories = res.categories);
  }

  updateProduct(){
    const formData = new FormData() ;
  const product = {
    title: this.editProductForm.controls['title'].value,
      content: this.editProductForm.controls['content'].value,
      description: this.editProductForm.controls['description'].value,
      brand:this.editProductForm.controls['brand'].value,
      countStock: this.editProductForm.controls['countStock'].value,
      // isFeatured: this.productForm.controls['isFeatured'].value,
      price: this.editProductForm.controls['price'].value ,
      category : this.editProductForm.controls['category'].value
  }
    formData.append('thumbnail', this.thumbnail) ;
    console.log(formData.get('thumbnail'))
    formData.append('product', JSON.stringify(product));
    console.log(product)
    this.productService.updateProduct(this.id,formData).subscribe(res => {
      if(res.success) {
        this.location.back()
       }
    },
    err => console.error(err))
  }

}



