import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);

    if (this.newsletterForm.valid) {
      this.service
        .sendData(
          this.newsletterForm.value.name,
          this.newsletterForm.value.email
        )
        .subscribe({
          next: (response) => {
            this.newsletterForm.reset();
            this.loading.set(false);
            alert(response.message);
          },
          error: () => {
            this.loading.set(false);
            alert("Falha na requisição. Tente novamente mais tarde.");
          },
        });
    }
  }
}
