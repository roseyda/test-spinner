import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { defer, NEVER } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { SpinnerOverlayComponent } from './../components/spinner-overlay/spinner-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  private overlayRef: OverlayRef = undefined;

  constructor(private overlay: Overlay) {}

  public readonly spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      })
    );
  }).pipe(share());

  private show(): void {
    console.log(
      '🚀 ~ file: spinner-overlay.service.ts ~ line 26 ~ SpinnerOverlayService ~ show ~ show'
    );
    // Hack avoiding `ExpressionChangedAfterItHasBeenCheckedError` error
    Promise.resolve(null).then(() => {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        hasBackdrop: true,
      });
      this.overlayRef.attach(new ComponentPortal(SpinnerOverlayComponent));
    });
  }

  private hide(): void {
    console.log(
      '🚀 ~ file: spinner-overlay.service.ts ~ line 41 ~ SpinnerOverlayService ~ hide ~ hide'
    );
    this.overlayRef.detach();
    this.overlayRef = undefined;
  }
}
