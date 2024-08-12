import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderService } from '@navaja/angular/common/services/header/header.service';
import { BookingService } from '@navaja/angular/booking/booking.service';
import { Service } from '@navaja/shared';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UserSelectors from '@navaja/angular/user/state/user.selectors';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Signal<Service[]>;
  loggedIn: Signal<boolean>;

  constructor(
    private readonly bookingService: BookingService,
    private readonly headerService: HeaderService,
    private readonly router: Router,
    private readonly store: Store
  ) {
    this.headerService.setHeader('Services');
    this.services = toSignal(this.bookingService.getServices(), {
      initialValue: []
    });
    this.bookingService.selectedService = null;
    this.loggedIn = toSignal(this.store.select(UserSelectors.getLoggedIn), {
      initialValue: false
    });
  }

  bookService(service: Service) {
    this.bookingService.selectedService = service;
    this.router.navigate(['/booking']);
  }
}
