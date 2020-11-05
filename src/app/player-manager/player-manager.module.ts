import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerMainComponent } from './player-main/player-main.component';
import { PlayerFormComponent } from './player-form/player-form.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlayerListComponent, PlayerMainComponent, PlayerFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PlayerMainComponent
  ]
})
export class PlayerManagerModule { }
