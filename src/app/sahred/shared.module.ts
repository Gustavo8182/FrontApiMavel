import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule} from '@angular/material/grid-list';



const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModules
  ],
  exports:[
    RouterModule,
    HeaderComponent,
    ...materialModules
  ],
  providers:[

  ]
})
export class SharedModule { }
