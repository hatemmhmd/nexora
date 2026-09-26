import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { COUNTRIES } from '../../../core/data/countries.data';
import { EXPERIENCE_OPTIONS, SERVICE_CATEGORY_OPTIONS } from '../../../core/data/form-options.data';
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

  private readonly fb = new FormBuilder();

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

    // Placeholder for the NEXORA partner-network API.
    this.isSubmitted.set(true);
    this.form.reset();
  }

  submitAnother(): void {
    this.isSubmitted.set(false);
  }
}
