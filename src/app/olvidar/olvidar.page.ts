import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonAlert, IonButton } from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.page.html',
  styleUrls: ['./olvidar.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class OlvidarPage  {
  
  public alertButtons = [

    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }
}








