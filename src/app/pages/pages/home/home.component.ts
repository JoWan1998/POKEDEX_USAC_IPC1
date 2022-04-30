import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokeapiService) { }
  pokemons = []

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((res)=>{
      if(res.count > 0)
      {
        this.pokemons = res.results
        console.log(this.pokemons)
      }
    }, (error)=> console.log(error));
  }

}
