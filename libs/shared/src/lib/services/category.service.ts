import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, ResCategory, ResOneCategory} from './../models/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  apiUrl = 'http://localhost:5000/categories'

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ResCategory>{
      return this.http.get<ResCategory>(this.apiUrl)

  }
  getCategory(id:string| undefined ):Observable<ResOneCategory> {
    return this.http.get<ResOneCategory>(`${this.apiUrl}/${id}`)
  }
  postCategories(data:Category){
    return this.http.post<Category>(this.apiUrl,data)
}
deleteCategory(id:string| undefined ){
  return this.http.delete(`${this.apiUrl}/${id}`)
}
// putCategory(id:number|undefined,data:Category){
//   return this.http.put(`${this.apiUrl}/${id}`,data)
// }
updateCategory(id: string, category: Category): Observable<ResOneCategory> {
  return this.http.put<ResOneCategory>(`${this.apiUrl}/${id}`, category)
}

}
