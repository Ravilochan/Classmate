import { Component } from "@angular/core";

import { PopoverController } from "@ionic/angular";

@Component({
  template: `
    <ion-list>
      <ion-item
        button
        (click)="close('https://ionicframework.com/getting-started')"
      >
        <ion-label>Learn</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://ionicframework.com/docs/')">
        <ion-label>Documentation & References </ion-label>
      </ion-item>
      <ion-item
        button
        (click)="close('https://github.com/Ravilochan/Classmate.git')"
      >
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }
}
