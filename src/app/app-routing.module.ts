import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CreateprojectComponent} from './pages/createproject/createproject.component';
import { CreateComponent } from './pages/create/create.component';
import {CreatecustomerComponent} from './pages/createcustomer/createcustomer.component';
import {UpdateprojectComponent} from './pages/updateproject/updateproject.component';
import { UpdateComponent } from './pages/update/update.component';
import {UpdatecustomerComponent} from './pages/updatecustomer/updatecustomer.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [

    
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'projects',
        component:ProjectsComponent,
    },
    {
        path:'project/:id',
        component:ProjectComponent,
    },
    {
        path:'employees',
        component:EmployeesComponent,
    },
    {
        path:'employee/:id',
        component:EmployeeComponent,
    },
    {
        path:'customers',
        component:CustomersComponent,
    },
    {
        path:'customer/:id',
        component:CustomerComponent,
    },
    {
        path:'createproject',
        component:CreateprojectComponent,
    },
    
    {
        path:'create',
        component:CreateComponent,
    },
    {
        path:'createcustomer',
        component:CreatecustomerComponent,
    },
    {
        path:'updateproject/:id',
        component:UpdateprojectComponent,
    },
    {
        path:'update/:id',
        component:UpdateComponent,
    },
    {
        path:'updatecustomer/:id',
        component:UpdatecustomerComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
