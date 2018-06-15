

import { ViewComponent } from './component/view/view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegPageComponent } from './component/reg-page/reg-page.component';
import { FormsModule } from '@angular/forms';
import {AppRoutes} from '../app.rootes.model';
import { BookingComponent } from './component/booking/booking.component';
import { EventPageComponent } from './component/event-page/event-page.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ListItemComponent } from './component/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegPageComponent,
    ViewComponent,
    BookingComponent,
    EventPageComponent,
    DetailsPageComponent,
    NavBarComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
