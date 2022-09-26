import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  panel="message"
  constructor(private router:Router,
    private data:DataService) { }

  ngOnInit(): void {
  }

  off(){
    this.data.connexionState=false
    this.router.navigate(["/connexion"])
  }

}
