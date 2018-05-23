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
    this.total = this.calculadoraForm.get("num1").value  + this.calculadoraForm.get("num2").value;
		
  }
  
  restar(numeroUno: number, numeroDos: number):number
  {
    this.total = numeroUno-numeroDos;
    return numeroUno-numeroDos;
  }
  
  multiplicar(numeroUno: number, numeroDos: number):number
  {
    this.total = numeroUno*numeroDos;
		return numeroUno*numeroDos;
  }
  
  dividir(numeroUno: number, numeroDos: number):number
  {
    this.total = numeroUno/numeroDos;
		return numeroUno/numeroDos;
	}
  
  constructor() { }

  ngOnInit() {
  }

  
 
}
