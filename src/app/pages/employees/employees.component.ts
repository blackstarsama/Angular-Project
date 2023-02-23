import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees;

  constructor(private employeesService:EmployeesService) {
    this.employeesService.getEmployees().subscribe(employees=>{
      this.employees=employees;
      console.log(employees);
  })

  }



  ngOnInit() {

  }
  deleteEmployee(id){
    this.employeesService
    .delete(id).subscribe(resp=>{
        console.log(resp);
    });
    // recharge page
    location.reload();
}

}
