import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'

const urlServer = "https://librarypca.fly.dev/";
const httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  constructor(private storage: Storage,  private http: HttpClient) { }

  // for local storage
  // loginUser(credentials: any){

  //     return new Promise( (accept, reject) => {

  //      const user = this.getRegisterUser();
       
  //     user.then(u => {
  //     if (atob(u.password) == credentials.password && u.email == credentials.email){
  //       accept("Login Exitoso");
  //     } else {
  //       reject("Login Fallido");
  //     }
  //     })
  //   });
  // }

  loginUser(credentials: any){
    return new Promise( (accept, reject) => {
      let params = {
        "user": credentials
      }
      this.http.post(`${urlServer}login`, params, httpHeaders).subscribe( (data: any) => {
        if (data.status == "OK") {
          accept(data);
        }else{
          reject(data.errors)
        }
      }, (error) => {
        let response = error.error.errors ?? "";
        reject("Error en Login: "+ JSON.stringify(response))
      })
    })
  }
  // for local storage
  // registerUser(userData: any){
  //   userData.password = btoa(userData.password);
  //   return this.storage.set("user", userData);
  // }

  registerUser(userData: any){
    let params = {
      "user": userData
    }
    return new Promise( (accept, reject) => {
      this.http.post(`${urlServer}signup`,params, httpHeaders).subscribe((data: any) => {
        if (data.status == "OK"){
          accept(data.msg);
        }else{
          reject(data.errors)
        }
      },(error) => {
        reject("Error al intentar registrarse")
      })
    })
  }


  getRegisterUser(){
    return this.storage.get("user");  
  }
}
