import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { COUNTRIES } from '../../../core/data/countries.data';
import { EXPERIENCE_OPTIONS, SERVICE_CATEGORY_OPTIONS } from '../../../core/data/form-options.data';
import { FormSubmitService } from '../../../core/services/form-submit.service';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-provider-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, LucideDynamicIcon, SelectComponent],
  templateUrl: './provider-form.component.html',
  styleUrl: './provider-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderFormComponent {
  readonly countries = COUNTRIES;
  readonly categories = SERVICE_CATEGORY_OPTIONS;
  readonly experienceOptions = EXPERIENCE_OPTIONS;
  readonly isSubmitted = signal(false);
  readonly isSubmitting = signal(false);
  readonly submitError = signal(false);

  private readonly fb = new FormBuilder();
  private readonly formSubmit = inject(FormSubmitService);

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    companyName: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    country: ['', [Validators.required]],
    serviceCategory: ['', [Validators.required]],
    servicesOffered: ['', [Validators.required]],
    experience: ['', [Validators.required]],
    portfolio: [''],
    notes: [''],
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(false);

    this.formSubmit.submit('New Provider Application — MADAD', this.form.getRawValue()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
        this.form.reset();
      },
      error: () => {
        this.isSubmitting.set(false);
        this.submitError.set(true);
      },
    });
  }

  submitAnother(): void {
    this.isSubmitted.set(false);
  }
}
