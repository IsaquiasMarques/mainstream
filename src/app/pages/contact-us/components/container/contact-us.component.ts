import { Component } from '@angular/core';
import { PageHeadComponent } from "@shared/components/page-head/page-head.component";
import { ContentComponent } from '../views/content/content.component';

@Component({
  selector: 'app-contact-us',
  imports: [PageHeadComponent, ContentComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
