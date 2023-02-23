import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    // création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
    formCreate={
    name:"",
    firstname:"",
    username:"",
    birthday:"",
    address:"",
    city:"",
    zipcode:"",
    phone:"",
    email:"",
    post:""
    }

    constructor(private employeesService:EmployeesService,private route:Router) {

    }

    ngOnInit() {
    }

    // fonction appelée au clique du bouton ajouter - voir html fonction (click)
    createEmployee(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.employeesService
    .createEmployee(this.formCreate.name,
      this.formCreate.firstname,
      this.formCreate.username,
      this.formCreate.birthday,
      this.formCreate.address,
      this.formCreate.city,
      this.formCreate.zipcode,
      this.formCreate.phone,
      this.formCreate.email,
      this.formCreate.post);
    }

}
