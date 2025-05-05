import { Component } from '@angular/core';
import { PageHeadComponent } from "@shared/components/page-head/page-head.component";
import { ContentComponent } from '../views/content/content.component';

@Component({
  selector: 'app-faq',
  imports: [PageHeadComponent, ContentComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
