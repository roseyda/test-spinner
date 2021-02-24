import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

@NgModule({
  declarations: [AppComponent, SpinnerOverlayComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
