import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../Model/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input()
  character?:Character;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
