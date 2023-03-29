import { CharacterServiceService } from './../service/character-service.service';
import { Character } from './../Model/character.model';
import { Component,  OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {


  character?:Character
  charId: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private characterService: CharacterServiceService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.charId = params.get('id')});
      this.getCharacterById()
  }

  getCharacterById(){
    this.characterService.getCharacterById(this.charId).subscribe(data=>{
      console.log(data);
      this.character = data;
    });
   }
}
