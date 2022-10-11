import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-write-news',
  templateUrl: './write-news.component.html',
  styleUrls: ['./write-news.component.scss']
})
export class WriteNewsComponent implements OnInit {

  @Output() panel = new EventEmitter<string>();
  imageIlust
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const data={
      titre:form.value.titre,
      contenu:form.value.contenu,
      img:this.imageIlust.name
    }

    this.data.addDataCollection("news", data).then(res=>{
      const snap=this.data.addFile("news/"+res, this.imageIlust)
      this.panel.emit("news")
    }).catch(er=>{
      console.log(er)
    })

  }

  image_illustration($event:any){
    this.imageIlust=$event.target.files[0]
    console.log(this.imageIlust)
  }

}
