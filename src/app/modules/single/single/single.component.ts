import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  form: FormGroup ;


  constructor( private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.form = this.fb.group({
        papelAncho    :['100',[Validators .required]],
        papelLargo    :['70',[Validators.required]],
        corteAncho    :['21',[Validators.required]],
        corteLargo    :['28',[Validators.required]],
        cortesDeseados:['1000',[Validators.required]],
    });
}

}
