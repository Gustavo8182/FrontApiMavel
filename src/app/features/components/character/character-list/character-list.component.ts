import { Component, OnInit } from '@angular/core';
import { Character } from '../Model/character.model';
import { CharacterServiceService } from '../service/character-service.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  allCharactersArray:Array<Character> = [];

  constructor(
    private characterService : CharacterServiceService
    ) { }

  ngOnInit(): void {
    this.getallCharacters();
  }

  getallCharacters(){
    this.characterService.getAll().subscribe(data=>{
      data.forEach((element:Character) => {
        this.allCharactersArray.push(element);
      });
    });
    console.log(this.allCharactersArray);
   }
}
