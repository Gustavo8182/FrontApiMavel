import { CommonModule } from '@angular/common';

import { CharacterServiceService } from './service/character-service.service';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../sahred/shared.module';



@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    CharacterServiceService
  ],exports:[
    CharacterPageComponent
  ]
})
export class CharacterModule { }
