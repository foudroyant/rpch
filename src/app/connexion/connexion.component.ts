import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  erreur=false
  constructor(private routeur:Router,
    private data:DataService) { }

  ngOnInit(): void {
    if(this.data.connexionState==true){
      this.routeur.navigate(["/admin"])
    }
  }

  onSubmit(form:NgForm){
    if(this.data.login(form.value)!=undefined){
      this.routeur.navigate(["/admin"])
    }
    else{
      this.erreur=true
    }
  }

}
