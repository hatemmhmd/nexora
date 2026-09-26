import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { COUNTRIES } from '../../../core/data/countries.data';
import { BUDGET_OPTIONS, SERVICE_CATEGORY_OPTIONS } from '../../../core/data/form-options.data';
import { FormSubmitService } from '../../../core/services/form-submit.service';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, LucideDynamicIcon, SelectComponent],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestFormComponent {
  readonly countries = COUNTRIES;
  readonly categories = SERVICE_CATEGORY_OPTIONS;
  readonly budgetOptions = BUDGET_OPTIONS;
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
    serviceRequired: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    budget: [''],
    deliveryDate: [''],
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

    this.formSubmit.submit('New Service Request — NEXORA', this.form.getRawValue()).subscribe({
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
