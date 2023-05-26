import { Component, OnInit } from '@angular/core';
import { Category,ResCategory, CategoryService } from '@codinwziro/shared';
import Swal from 'sweetalert2';


@Component({
  selector: 'blog-listcategory',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
  providers :[CategoryService]
})
export class ListCategoryComponent  implements OnInit {
  // form :Category [] = []
  categories: Category[] | undefined=[]
  constructor(private categoryService: CategoryService){}
  ngOnInit(): void {
      this.getCategories()
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe((res: ResCategory) => this.categories = res.categories);
  }
  destroyCategory(id:string){
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
        this.categoryService.deleteCategory(id).subscribe(()=> {
          this.getCategories()
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
