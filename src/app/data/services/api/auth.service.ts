import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) { }

	registrer( user: UserModel){
		let headers = new HttpHeaders({
			//"Access-Control-Allow-Headers" : "Content-Type",
			"Access-Control-Allow-Origin": "http://localhost:4200",
			"Access-Control-Allow-Methods": "POST,GET",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "true",
			"Access-Control-Allow-Headers": "Origin, Content-Type, Authorization, X-Auth-Token, X-Requested-With",

			//"api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
		 });
		 const urlback = 'http://localhost:8000/user/registrer';
		 let params = JSON.stringify(user);

		 return this.http.post( urlback, params, {headers});
	}

	getAllDocument(){
		let headers = new HttpHeaders({
			//"Access-Control-Allow-Headers" : "Content-Type",
			"Access-Control-Allow-Origin": "http://localhost:4200",
			"Access-Control-Allow-Methods": "POST,GET",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "true",
			"Access-Control-Allow-Headers": "Origin, Content-Type, Authorization, X-Auth-Token, X-Requested-With",


		   "api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
		});
		 const path = 'http://localhost:8000/document';
		   return this.http.get<Document>(path,{headers});//<Cotizacion[]>
	 
	   }

  login(user: UserModel){

  }

  logout(){

  }

}
