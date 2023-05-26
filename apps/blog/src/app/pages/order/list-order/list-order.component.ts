// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import Swal from 'sweetalert2';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Order, ResOrder } from './../../../../../../../libs/shared/src/lib/models/order';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { OrderService } from './../../../../../../../libs/shared/src/lib/services/orders/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  orders: Order[] | undefined=[]
  constructor(private orderService: OrderService){}
  ngOnInit(): void {
      this.getOrders()
  }

  getOrders(){
    this.orderService.getAllOrders().subscribe((res: ResOrder) =>
    this.orders = res.orders
    );
  }
  destroyOrder(id:string){
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
        this.orderService.deleteOrder(id).subscribe(()=> {
          this.getOrders()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }

    })


  }
  // toggleOrderStatus(order: Order): void {
  //   switch (order.status) {
  //     case 'shipped':
  //       order.status = 'received';
  //       break;
  //     case 'received':
  //       order.status = 'canceled';
  //       break;
  //     case 'canceled':
  //       order.status = 'pending';
  //       break;
  //     case 'pending':
  //       order.status = 'shipped';
  //       break;
  //     default:
  //       break;
  //   }

  //   let { _id, shippingAddress, status, city, country,phone,total }: Order = order;
  //   this.orderService.putStatus(_id, { shippingAddress, status, city, country,phone,total })
  //     .subscribe((response) => {
  //       // After updating the order status, sort the order list
  //       this.orders.sort((a, b) => {
  //         if (a.status === 'pending' && b.status !== 'pending') {
  //           return -1;
  //         } else if (a.status !== 'pending' && b.status === 'pending') {
  //           return 1;
  //         } else {
  //           return 0;
  //         }
  //       });
  //     });
  // }
  // getStatusClass(task:Order): string {
  //   switch (task.status) {
  //     case'pending':
  //     return'bg-black'
  //     case 'received':
  //       return 'bg-success';
  //     case 'canceled':
  //       return 'bg-warning';
  //     case 'shipped':
  //       return 'bg-danger';
  //     default:
  //       return '';
  //   }
  // }

}
