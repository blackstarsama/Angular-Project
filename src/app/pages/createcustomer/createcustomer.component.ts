import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  // création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
  formCreate={
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


    constructor(private customersService:CustomersService, private route:Router) {

    }

    ngOnInit() {
    }

    // fonction appelée au clique du bouton ajouter - voir html fonction (click)
    createCustomer(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.customersService
    .createCustomer(this.formCreate.nameent,
        this.formCreate.address,
        this.formCreate.city,
        this.formCreate.zipcode,
        this.formCreate.name,
        this.formCreate.firstname,
        this.formCreate.phone,
        this.formCreate.email,
        this.formCreate.activity);
  }

}
