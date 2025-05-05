import { Component } from '@angular/core';
import { PageHeadComponent } from "@shared/components/page-head/page-head.component";
import { ContentComponent } from "../views/content/content.component";

@Component({
  selector: 'app-about-us',
  imports: [PageHeadComponent, ContentComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
