import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-header',
    styleUrl: './header.component.css',
    imports: [ RouterLink, RouterLinkActive ],
    templateUrl: './header.component.html',
    standalone: true,
})
export class HeaderComponent{
    
}