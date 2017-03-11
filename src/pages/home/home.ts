import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {FormBuilder, FormGroup, Validators} from'@angular/forms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;
  op1:string = "";
  op2:string = "";
  sym:string = "";
  flag:boolean = false;
  resultado:number = 0;
  constructor(public navCtrl: NavController){

  }
 
  suma(){
    if(this.op1=="" || this.op2==""){
     this.flag = true;
      return;
    }  
    this.resultado = (Number.parseInt(this.op1)+Number.parseInt(this.op2));
    this.sym = "+";
    this.flag = false;
    }

  resta(){
    if(this.op1=="" || this.op2==""){
     this.flag = true;
      return;
    } 
    this.resultado = (Number.parseInt(this.op1)-Number.parseInt(this.op2));
    this.sym = "-";
    this.flag = false;
  }
  multiplicacion(){
    if(this.op1=="" || this.op2==""){
     this.flag = true;
      return;
    } 
    this.resultado = (Number.parseInt(this.op1)*Number.parseInt(this.op2));
    this.sym = "*";
    this.flag = false;
  }
  division(){
    if(this.op1=="" || this.op2==""){
     this.flag = true;
      return;
    } 
    this.resultado = (Number.parseInt(this.op1)/Number.parseInt(this.op2));
    this.sym = "/";
    this.flag = false;
  }   
  mod(){
    if(this.op1=="" || this.op2==""){
     this.flag = true;
      return;
    } 
    this.resultado = (Number.parseInt(this.op1)%Number.parseInt(this.op2));
    this.sym = "%";
    this.flag = false;
  }

  verify():boolean{

    return true;
  }

}
