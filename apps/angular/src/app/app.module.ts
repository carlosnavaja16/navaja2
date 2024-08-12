import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '@navaja/angular/src/app/app-routing.module';
import { AppComponent } from '@navaja/angular/src/app/app.component';
import { HomeComponent } from '@navaja/angular/src/app/home/home.component';
import { ServicesComponent } from '@navaja/angular/booking/pages/services/services.component';
import { ProfileComponent } from '@navaja/angular/user/pages/profile/profile.component';
import { SignUpComponent } from '@navaja/angular/user/pages/sign-up/sign-up.component';
import { LoginComponent } from '@navaja/angular/user/pages/login/login.component';
import { LogoutComponent } from '@navaja/angular/user/pages/logout/logout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from '@navaja/angular/booking/pages/booking/booking.component';
import { TimeSlotsComponent } from '@navaja/angular/booking/components/time-slots/time-slots.component';
import { AppointmentSummaryComponent } from '@navaja/angular/booking/components/appointment-summary/appointment-summary.component';
import { AppointmentPreviewComponent } from '@navaja/angular/booking/components/appointment-preview/appointment-preview.component';
import { environment } from '@navaja/angular/src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicePickerComponent } from '@navaja/angular/booking/components/service-picker/service-picker.component';
import { DurationPipe } from '@navaja/angular/booking/pipes/duration.pipe';
import { DatePickerComponent } from '@navaja/angular/booking/components/date-picker/date-picker.component';
import { ProfileFormComponent } from '@navaja/angular/user/components/profile-form/profile-form.component';
import { SignUpFormComponent } from '@navaja/angular/user/components/sign-up-form/sign-up-form.component';
import { AppointmentsComponent } from '@navaja/angular/booking/pages/appointments/appointments.component';
import { AppointmentRescheduleComponent } from '@navaja/angular/booking/pages/appointment-reschedule/appointment-reschedule.component';

// Firebase 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// material design
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

// icons
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { heroUserCircle } from '@ng-icons/heroicons/outline';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { heroEnvelopeSolid } from '@ng-icons/heroicons/solid';
import { heroPhoneSolid, heroCalendarSolid } from '@ng-icons/heroicons/solid';
import { heroCalendarDays, heroCalendar } from '@ng-icons/heroicons/outline';
import {
  heroHomeModernMini,
  heroCalendarMini,
  heroClockMini
} from '@ng-icons/heroicons/mini';

// NgRx
import { StoreModule } from '@ngrx/store';
import { bookingReducer } from './booking/state/booking.reducer';
import { userReducer } from './user/state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/state/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ProfileComponent,
    SignUpComponent,
    LoginComponent,
    LogoutComponent,
    GalleryComponent,
    BookingComponent,
    TimeSlotsComponent,
    ServicePickerComponent,
    DurationPipe,
    DatePickerComponent,
    ProfileFormComponent,
    SignUpFormComponent,
    AppointmentPreviewComponent,
    AppointmentSummaryComponent,
    AppointmentsComponent,
    AppointmentRescheduleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({
      heroBars3,
      heroUserCircle,
      bootstrapGithub,
      bootstrapLinkedin,
      heroEnvelopeSolid,
      heroPhoneSolid,
      heroCalendarDays,
      heroCalendarSolid,
      heroCalendar,
      heroHomeModernMini,
      heroCalendarMini,
      heroClockMini
    }),
    MatSidenavModule,
    StoreModule.forRoot({
      booking: bookingReducer,
      user: userReducer
    }),
    EffectsModule.forRoot([UserEffects]),

  ],
  providers: [
    MatSnackBar,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
