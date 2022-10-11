import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  news=[
    {
      titre:"DATES LIMITES POUR LA RÉCEPTION DES DOSSIERS",
      image:"datelite.PNG",
      paragraphes:["Écoles publiques,  jusqu'au 04 décembre 2022.", "Parcoursup, jusqu'au 03 février 2023.", "Écoles privées,  jusqu'au 26 mai 2023."]
    },
    {
      titre:"ASSISTANCE VOYAGE",
      image:"afficheassistance.PNGgit",
      paragraphes:[]
    },
    {
      titre:"LOGEMENT étudiants",
      image:"affichelogement.jpg",
      paragraphes:["+1000 logements disponibles."]
    }
  ]
  new=this.news[0]

  constructor() { }

  ngOnInit(): void {
  }

  showNew(info){
    this.new=info;
    console.log(info)
  }

}
