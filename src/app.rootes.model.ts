import { DetailsPageComponent } from './app/component/details-page/details-page.component';
import { BookingComponent } from './app/component/booking/booking.component';
import { ViewComponent } from "./app/component/view/view.component";
import { RegPageComponent } from './app/component/reg-page/reg-page.component';
import { EventPageComponent } from './app/component/event-page/event-page.component';

//export const AppRoutes = [ { path : '', component: RegPageComponent },
//{ path : 'view', component: ViewComponent } ];
//export const AppBookingRoutes = [ { path : 'booking', component: BookingComponent } ];

export const AppRoutes = [ { path : '', component: RegPageComponent },
                            { path : 'details', component: DetailsPageComponent,
                             children:[ 
                                { path : 'Event', component: EventPageComponent },
                                { path : 'View', component:  ViewComponent }
                            ]}
                        ];