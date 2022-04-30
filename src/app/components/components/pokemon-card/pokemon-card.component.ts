import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  constructor(private pokemonservice: PokeapiService) { }
  name = ""
  image = ""
  id = ""
  color = ""
  @Input() informacion:any;

  colores = [
    {"Tipo":"water","Color":"#B0E2FF"},
    {"Tipo":"bug","Color":"#99CC33"},
    {"Tipo":"dragon","Color":"#AB82FF"},
    {"Tipo":"electric","Color":"#FFD700"},
    {"Tipo":"ghost","Color":"#778899"},
    {"Tipo":"fire","Color":"#FF7F00"},
    {"Tipo":"fairy","Color":"#FFB0FF"},
    {"Tipo":"ice","Color":"#ADD8E6"},
    {"Tipo":"fighting","Color":"#FF6A6A"},
    {"Tipo":"normal","Color":"#DDCCAA"},
    {"Tipo":"grass","Color":"#99FF66"},
    {"Tipo":"psychic","Color":"#FFB5C5"},
    {"Tipo":"rock","Color":"#CD853F"},
    {"Tipo":"default","Color":"#A9A9A9"},
    {"Tipo":"ground","Color":"#DEB887"},
    {"Tipo":"poison","Color":"#CC88BB"},
    {"Tipo":"flying","Color":"#BAAAFF"}
]

  ngOnInit(): void {
    this.name = this.informacion.name;
    this.pokemonservice.getPokemon(this.name).subscribe((res)=>
    {
      if(res)
      {
        this.id = res.id
        this.image = res.sprites.front_default
        this.colores.forEach((colors)=>{
          if(colors.Tipo == res.types[0].type.name) this.color = colors.Color
        })
      }
    }, (error)=> console.log(error))
  }

}
