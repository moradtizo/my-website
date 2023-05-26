import { HttpClient } from '@angular/common/http';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { OrderService } from './../../../../../../../libs/shared/src/lib/services/orders/order.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'blog-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

constructor (private orderService:OrderService,http:HttpClient,private fb: FormBuilder){}

countries: any[] = [];
cities: any[] = [];
selectedCountry: any = null;
form:any= FormGroup ;
// ngOnInit(): void {
//  this.getAllcountry()

// }
// getAllcountry(){
//   this.orderService.allCountry().subscribe((data :any) =>{
//   this.country = data
//   console.log(data)

// })
// }
// getCities(countryCode: string) {
//   this.selectedCountryName = this.country.find((c: any) => c.alpha2Code === countryCode)?.name || '';
//   this.cities = this.country.find((c: any) => c.alpha2Code === countryCode)?.capital || [];
// }
ngOnInit() {
  this.form = this.fb.group({
    country: ['']
  });

  this.orderService.getCountries().subscribe((data: any) => {
    this.countries = data;

  });
}

onCountrySelected() {
  const countryCode = this.form.controls['country'].value;
  this.selectedCountry = this.countries.find(c => c.alpha2Code === countryCode);
  if (this.selectedCountry) {
    this.orderService.getCities(this.selectedCountry.alpha2Code).subscribe((data: any) => {
      if (data.capital) {
        this.cities = [data.capital, ...data.name.filter((name:any) => name !== data.capital)];
      } else {
        this.cities = data.name;
      }
    });
  }
}
}
