import { Component, OnInit } from '@angular/core';
import { Calcular } from '../../../data/models/calcular'

@Component({
  selector: 'app-create-document-details',
  templateUrl: './create-document-details.component.html',
  styleUrls: ['./create-document-details.component.css']
})

export class CreateDocumentDetailsComponent implements OnInit {
  
  calculadora = new Calcular();

  
  constructor() {

  }

  ngOnInit(): void {
  }

  maximisar(){}

}
