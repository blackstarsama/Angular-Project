import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn : 'root'
  })
export class EmployeesService {

// ApiUrl="http://localhost:4200/assets/data/data.json";
apiUrl="http://localhost:3000/employees/";

datatopost;

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })};

 constructor(private http:HttpClient,private router:Router) {

  }

// get all users
getEmployees(){
    return this.http.get(this.apiUrl);
}

// get one user by Id
getEmployee(id){
    return this.http.get(this.apiUrl+id);
}

// create a user
createEmployee(name,firstname,username,
  birthday,address,city,zipcode,
  phone,email,post){
    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":name,
          "firstname":firstname,
          "username":username,
          "birthday":birthday,
          "address":address,
          "city":city,
          "zipcode":zipcode,
          "phone":phone,
          "email":email,
          "post":post
        }

    // conversion en jSON
    this.datatopost=JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
        res =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
}

// mise à jour user
updatedEmployee(name,firstname,username,
  birthday,address,city,zipcode,
  phone,email,post,id){

    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":name,
          "firstname":firstname,
          "username":username,
          "birthday":birthday,
          "address":address,
          "city":city,
          "zipcode":zipcode,
          "phone":phone,
          "email":email,
          "post":post
        }

        // conversion en JSON
        this.datatopost=JSON.stringify(payload);

        // requête http en post qui renvoie resp ou err
        return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        );

}

// suppression d'un user
delete(id){
    return this.http.delete(this.apiUrl+id);
}

}
