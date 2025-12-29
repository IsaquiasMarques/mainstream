import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopUp, PopupStatus } from '@seller-backoffice-core/libs/popup/popup.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styles: ``
})
export class App {
  popupStatus = PopupStatus;
  popup = inject(PopUp);
}
