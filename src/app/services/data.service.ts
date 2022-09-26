import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  connexionState=false
  constructor() { }

  login(user){
    if(user["username"]=="ROOT" && user["psw"]=="TOOR"){
      this.connexionState=true
      return "0000"
    }
    else{
      return undefined
    }
  }
}
