import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@partials/header/header.component';
import { FooterComponent } from "./partials/footer/footer.component";
import { NgClass } from '@angular/common';
import { PopUp, PopupStatus } from '@libraries/popup/popup.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  popupStatus = PopupStatus;
  log = inject(PopUp);
}
