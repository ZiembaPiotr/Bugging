import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule,Routes } from "@angular/router";
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { SingleHotelComponent } from './components/single-hotel/single-hotel.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {MatMenuModule} from "@angular/material/menu";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ProfileComponent } from './components/profile/profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileNotFoundComponent } from './components/profile-not-found/profile-not-found.component';
import { OpinionListComponent } from './components/opinion-list/opinion-list.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomComponent } from './components/room/room.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import {MatSliderModule} from "@angular/material/slider";
import { MatNativeDateModule } from '@angular/material/core';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { EditHotelComponent } from './components/edit-hotel/edit-hotel.component';
import { DeleteHotelComponent } from './components/delete-hotel/delete-hotel.component';

const appRoutes:Routes = [
  { path: '', component:HotelListComponent },
  { path: 'hotel/:hotel_id', component:SingleHotelComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'loginGuest', component:LoginComponent },
  { path: 'loginAdmin', component:LoginAdminComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'reservation/:room_id', component:ReservationComponent },
  { path: 'addHotel', component:AddHotelComponent },
  { path: 'editHotel', component:EditHotelComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HotelListComponent,
    HotelComponent,
    FooterComponent,
    SingleHotelComponent,
    LoginComponent,
    RegisterComponent,
    LoginAdminComponent,
    ProfileComponent,
    UserProfileComponent,
    ProfileNotFoundComponent,
    OpinionListComponent,
    OpinionComponent,
    RoomListComponent,
    RoomComponent,
    ReservationComponent,
    AddCommentComponent,
    AddHotelComponent,
    EditHotelComponent,
    DeleteHotelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
