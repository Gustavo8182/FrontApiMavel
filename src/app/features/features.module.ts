import { CharacterModule } from './components/character/character.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterModule
  ],exports:[
    CharacterModule
  ]
})
export class FeaturesModule { }
