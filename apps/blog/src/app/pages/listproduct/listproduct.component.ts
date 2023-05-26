import { Category, ResCategory } from '@codinwziro/shared';
import { CategoryService } from '@codinwziro/shared';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product, ResProduct } from 'libs/shared/src/lib/models/product';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProductService } from './../../../../../../libs/shared/src/lib/services/product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'blog-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  currentRate = 5;
  products: Product[] | undefined=[]
  categories: Category[] | undefined=[]
  constructor(private productService:ProductService,private categoryService:CategoryService){}
  ngOnInit(): void {
      this.getProduct()
      this.getCategories()
  }

  getProduct(){
    this.productService.getAllProduct().subscribe((res: ResProduct) =>
     this.products = res.products
    );
  }
  getCategories(){
    this.categoryService.getAllCategories().subscribe((res: ResCategory) => this.categories = res.categories);
    }
  destroyProduct(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe(()=> {
          this.getProduct()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }

    })


  }
}
