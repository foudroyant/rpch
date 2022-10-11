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
  news=[]
  imgs:Array<string>=[]
  constructor(private router:Router,
    private data:DataService) { }

  ngOnInit(): void {
    //this.getFile("news","8qmMNG6aEBtHLM6I0zAd","one")
    this.getCollection()
  }

  off(){
    this.data.connexionState=false
    this.router.navigate(["/connexion"])
  }

  getFile(ref, id, limit){
    const file=this.data.getFile(ref,id,limit)
    console.log(file)
    return file
  }

  getCollection(){
    this.data.getCollection("news").then(res=>{
      //console.log(res)
    this.imgs=[]
    this.imgs=this.getFile("news","","all")
      this.news=[]
      this.news=res
    })
  }

}
