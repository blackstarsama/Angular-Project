import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employee;
employeeId;

  constructor(private employeesService:EmployeesService,private route:ActivatedRoute,private router:Router) {

      // Récupérer l'id dans  la route
      this.route.params.subscribe((params) => {
          this.employeeId=params['id'];
          console.log(params['id']);
      })

      // utiliser le service qui permet d'avoir un utilisateur en fonction de l'id
    this.employeesService.getEmployee(this.employeeId).subscribe(employee=>{

        this.employee=employee;
        console.log(this.employee);

    });

  }

  ngOnInit() {
  }

  // fonction de suppression qui est utilisé au click (voir html)
  deleteEmployee(){
      this.employeesService.delete(this.employeeId).subscribe(employee=>{
          console.log(this.employee);
          // on retourne sur la page users
           this.router.navigate['employees'];
      });

  }

}
