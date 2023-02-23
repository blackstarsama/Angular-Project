import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { CreateComponent } from './pages/create/create.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateComponent } from './pages/update/update.component';
import { CreatecustomerComponent } from './pages/createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './pages/updatecustomer/updatecustomer.component';
import { CreateprojectComponent } from './pages/createproject/createproject.component';
import { UpdateprojectComponent } from './pages/updateproject/updateproject.component';

// services
import {EmployeesService} from './services/employees.service';
import {CustomersService} from './services/customers.service';
import {ProjectsService} from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    CreateComponent,
    ProjectsComponent,
    EmployeesComponent,
    CustomersComponent,
    HomeComponent,
    EmployeeComponent,
    CustomerComponent,
    ProjectComponent,
    CreatecustomerComponent,
    UpdatecustomerComponent,
    UpdatecustomerComponent,
    CreatecustomerComponent,
    CreateprojectComponent,
    UpdateprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeesService,
    CustomersService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
