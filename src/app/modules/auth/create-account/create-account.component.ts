import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../data/models/user.model';
import { AuthService } from '../../../data/services/api/auth.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  allCotizaciones;
  user: UserModel;  
  form: FormGroup;
  
  constructor( private authServices: AuthService, private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {

    
  }

  crearFormulario(){
    this.form = this.fb.group({
      email    :['dasiva87@gmail.com',[Validators.required]],
  
  });
  }

 


  obtenerDocumentos(){
		this.authServices.getAllDocument().subscribe((response)=>{
			this.allCotizaciones = response;
			console.log(response);
		});
  }
  

  onSubmit(){

    this.user= new UserModel();
    this.user.email = 'dasivfda87@homrila.com';
    this.user.codigo = "0df06",
    this.user.nombre = "Mateo1df0010101010 Silva Vargas",
    this.user.tipo_doc = "CdfC",
    this.user.numeroDoc = "002df2dd00",
    this.user.telefono = "22df2",
    this.user.celular = "22df22",
    this.user.email = "mateodf1010101010@gmail.com",
    this.user.direccion = "El cdfarmelo",
    this.user.username = "mateo10df1010101",
    this.user.password = "mateo10df101010",
    this.user.business_id = 1


    this.authServices.registrer(this.user).subscribe( (resp) =>{
      console.log(resp)
    },(err : HttpErrorResponse)=>{
      console.log(err.error);
    });



  }

}