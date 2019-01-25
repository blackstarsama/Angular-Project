import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  customer;
  customerId;

  formUpdate={
    nameent:"",
    address:"",
    city:"",
    zipcode:"",
    name:"",
    firstname:"",
    phone:"",
    email:"",
    activity:""
  }
  constructor(private customersService:CustomersService,private route:ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.customerId=params['id'];
  })

  this.customersService.getCustomer(this.customerId).subscribe(customer=>{

      this.customer=customer;
      console.log(this.customer);

  });
   }

  ngOnInit() {
  }
  updateCustomer(id){
    this.customersService
    .updatedCustomer(this.formUpdate.nameent,
      this.formUpdate.address,
      this.formUpdate.city,
      this.formUpdate.zipcode,
      this.formUpdate.name,
      this.formUpdate.firstname,
      this.formUpdate.phone,
      this.formUpdate.email,
      this.formUpdate.activity,
      this.customerId)      
}

}

