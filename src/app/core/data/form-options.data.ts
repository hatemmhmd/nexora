import { SelectOption } from '../models';

export const SERVICE_CATEGORY_OPTIONS: SelectOption[] = [
  { value: 'digital', labelKey: 'services.categories.digital.title' },
  { value: 'marketing', labelKey: 'services.categories.marketing.title' },
  { value: 'business', labelKey: 'services.categories.business.title' },
  { value: 'printing', labelKey: 'services.categories.printing.title' },
  { value: 'other', labelKey: 'services.categories.other.title' },
];

export const BUDGET_OPTIONS: SelectOption[] = [
  { value: 'under-2k', labelKey: 'form.budgetOptions.under2k' },
  { value: '2k-5k', labelKey: 'form.budgetOptions.range2to5k' },
  { value: '5k-15k', labelKey: 'form.budgetOptions.range5to15k' },
  { value: '15k-plus', labelKey: 'form.budgetOptions.above15k' },
  { value: 'not-sure', labelKey: 'form.budgetOptions.notSure' },
];

export const EXPERIENCE_OPTIONS: SelectOption[] = [
  { value: 'under-1', labelKey: 'form.experienceOptions.under1' },
  { value: '1-3', labelKey: 'form.experienceOptions.range1to3' },
  { value: '3-5', labelKey: 'form.experienceOptions.range3to5' },
  { value: '5-plus', labelKey: 'form.experienceOptions.above5' },
];
