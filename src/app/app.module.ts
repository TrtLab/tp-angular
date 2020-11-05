import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VirtualkbComponent } from './virtualkb/virtualkb.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FlockerComponent } from './flocker/flocker.component';
import { PriceComponent } from './price/price.component';
import { AjaxComponent } from './ajax/ajax.component';
import { AjaxPostComponent } from './ajax-post/ajax-post.component';
import { PlayerManagerModule } from './player-manager/player-manager.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarouselComponent,
    VirtualkbComponent,
    PlayersComponent,
    PlayerComponent,
    ImageGalleryComponent,
    FlockerComponent,
    PriceComponent,
    AjaxComponent,
    AjaxPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PlayerManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
