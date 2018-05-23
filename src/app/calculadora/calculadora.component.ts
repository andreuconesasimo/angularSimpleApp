import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit, ICalculadora {

  total = 0;
  
  sumar(numeroUno: number, numeroDos: number):number
  {
    this.total = numeroUno + numeroDos;
		return numeroUno+numeroDos;
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
