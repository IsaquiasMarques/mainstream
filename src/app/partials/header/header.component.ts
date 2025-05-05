import { NgClass } from "@angular/common";
import { Component, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { BodyHeightLimiterDirective } from "@shared/directives/body-height-limiter.directive";

@Component({
    selector: 'app-header',
    styleUrl: './header.component.css',
    imports: [ RouterLink, RouterLinkActive, NgClass, BodyHeightLimiterDirective ],
    templateUrl: './header.component.html',
    standalone: true,
})
export class HeaderComponent{
    isMobileMenuExtended = signal<boolean>(false);

    openMobileMenu(){
        this.isMobileMenuExtended.set(true);
    }

    closeMobileMenu(){
        this.isMobileMenuExtended.set(false);
    }

    toggleMobileMenuDropdown(){
        if(this.isMobileMenuExtended()){
            this.closeMobileMenu();
            return;
        }

        this.openMobileMenu();
    }
}