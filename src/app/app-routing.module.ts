import { CharacterPageComponent } from './features/components/character/character-page/character-page.component';
import { CharacterDetailsComponent } from './features/components/character/character-details/character-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo:  '/home', pathMatch:"full"
   },
   {
    path: "home", component: CharacterPageComponent
   },
  {
    path: "character-details/:id", component: CharacterDetailsComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
