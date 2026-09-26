import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { FAQ_ITEMS } from '../../core/data/faq-items.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    LucideDynamicIcon,
    SectionHeadingComponent,
    FaqAccordionComponent,
    RevealDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly faqItems = FAQ_ITEMS;
  readonly isSubmitted = signal(false);

  private readonly fb = new FormBuilder();

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Placeholder for the NEXORA contact-inbox API.
    this.isSubmitted.set(true);
    this.form.reset();
  }

  submitAnother(): void {
    this.isSubmitted.set(false);
  }
}
