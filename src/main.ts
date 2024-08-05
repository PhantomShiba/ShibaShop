import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CartService } from './app/cart.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CartService)
  ]
}).catch(err => console.error(err));
