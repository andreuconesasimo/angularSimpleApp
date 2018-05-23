import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  total = 0;
  calculadoraForm = new FormGroup({
    num1: new FormControl(),
    num2: new FormControl()
  })

  
  sumar():void
  {
    this.total = +this.calculadoraForm.get("num1").value  + +this.calculadoraForm.get("num2").value;
		
  }
  
  restar():void
  {
    this.total = +this.calculadoraForm.get("num1").value  - +this.calculadoraForm.get("num2").value;
  }
  
  multiplicar():void
  {
    this.total = +this.calculadoraForm.get("num1").value * +this.calculadoraForm.get("num2").value;
  }
  
  dividir():void
  {
    this.total = +this.calculadoraForm.get("num1").value / +this.calculadoraForm.get("num2").value;
	}
  
  constructor() { }

  ngOnInit() {
  }

  
 
}
