import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { NewsletterFormComponent } from "../newsletter-form/newsletter-form.component";
import { BenefitCardComponent } from "../benefit-card/benefit-card.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, NewsletterFormComponent, BenefitCardComponent, FooterComponent]
})
export class HomeComponent {

}
