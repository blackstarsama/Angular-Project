import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employee;
  employeeId;

    formUpdate={
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

  constructor(private employeesService:EmployeesService,private route:ActivatedRoute) {
      this.route.params.subscribe((params) => {
          this.employeeId=params['id'];
      })

      this.employeesService.getEmployee(this.employeeId).subscribe(employee=>{

          this.employee=employee;
          console.log(this.employee);

      });
  }

  ngOnInit() {
  }
  updateEmployee(id){
      this.employeesService
      .updatedEmployee(this.formUpdate.name,
        this.formUpdate.firstname,
        this.formUpdate.username,
        this.formUpdate.birthday,
        this.formUpdate.address,
        this.formUpdate.city,
        this.formUpdate.zipcode,
        this.formUpdate.phone,
        this.formUpdate.email,
        this.formUpdate.post,
        this.employeeId)      
  }

}