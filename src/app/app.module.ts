import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Buildings } from './buildings/buildings.component';
import { BuildingListComponent } from './buildings/building-list/building-list.component';
import { BuildingDetailComponent } from './buildings/building-detail/building-detail.component';
import { BuildingItemComponent } from './buildings/building-list/building-item/building-item.component';
import { ApartmentsListComponent } from './apartments/apartments-list/apartments-list.component';
import { ApartmentsEditComponent } from './apartments/apartments-edit/apartments-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Buildings,
    BuildingListComponent,
    BuildingDetailComponent,
    BuildingItemComponent,
    ApartmentsListComponent,
    ApartmentsEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
