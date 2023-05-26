import { CategoryService } from '@codinwziro/shared';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, ResCategory } from '@codinwziro/shared';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from 'libs/shared/src/lib/models/product';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProductService } from 'libs/shared/src/lib/services/product.service';

@Component({
  selector: 'blog-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  thumbnail : any;
  categories: Category[] | undefined=[]
  form :Product [] = []
  productForm = new FormGroup({
    title : new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[0-9a-zA-Z]*')]),
    description : new UntypedFormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(20)]),
    content:new UntypedFormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(20)]),
    brand: new UntypedFormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[0-9a-zA-Z]*')]),
    countStock : new UntypedFormControl('',Validators.required),
    price:new UntypedFormControl('',Validators.required),
    category:new UntypedFormControl('',Validators.required),
  })
  constructor(private productService:ProductService,private categoryService:CategoryService, private router: Router){}
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
  saveProduct(){
    const formData = new FormData() ;
    if(!this.thumbnail){
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const product = {
      title: this.productForm.controls['title'].value,
      content: this.productForm.controls['content'].value,
      description: this.productForm.controls['description'].value,
      brand:this.productForm.controls['brand'].value,
      countStock: this.productForm.controls['countStock'].value,
      // isFeatured: this.productForm.controls['isFeatured'].value,
      price: this.productForm.controls['price'].value ,
      category : this.productForm.controls['category'].value
    }
    console.log(product)
    console.log(this.thumbnail)
    formData.append('thumbnail', this.thumbnail) ;
    formData.append('product' , JSON.stringify(product) ) ;
    this.productService.postProduct(formData).subscribe(() => {
        this.productForm.reset()
        // this.router.navigate(['/blog/addProduct'])
      })
  }
  ngOnInit(): void {
    this.getCategories()
}

    getCategories(){
      this.categoryService.getAllCategories().subscribe((res: ResCategory) => this.categories = res.categories);
      }

//   postProduct(){
//     if(this.productForm.valid){
// const{title,description,content,brand,countStock,price,thumbnail} = this.productForm.value
//     this.productService.postProduct({title,description,content,brand,countStock,price,thumbnail}).subscribe((response: Product) => {
//       this.form = [...this.form,response]
//      this.productForm.reset()
//      this.router.navigate(['/blog/addProduct'])

//     })
//     }

//   }
}
