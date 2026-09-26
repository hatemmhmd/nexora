import { ServiceCategory } from '../models';

// Illustrative categories only — NEXORA is not limited to this list.
// Each `itemKeys` entry resolves against `services.categories.<id>.items.<n>`
// in the translation files.
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'digital',
    icon: 'laptop',
    titleKey: 'services.categories.digital.title',
    descriptionKey: 'services.categories.digital.description',
    itemKeys: [
      'services.categories.digital.items.0',
      'services.categories.digital.items.1',
      'services.categories.digital.items.2',
      'services.categories.digital.items.3',
    ],
  },
  {
    id: 'marketing',
    icon: 'palette',
    titleKey: 'services.categories.marketing.title',
    descriptionKey: 'services.categories.marketing.description',
    itemKeys: [
      'services.categories.marketing.items.0',
      'services.categories.marketing.items.1',
      'services.categories.marketing.items.2',
      'services.categories.marketing.items.3',
      'services.categories.marketing.items.4',
    ],
  },
  {
    id: 'business',
    icon: 'briefcase-business',
    titleKey: 'services.categories.business.title',
    descriptionKey: 'services.categories.business.description',
    itemKeys: [
      'services.categories.business.items.0',
      'services.categories.business.items.1',
      'services.categories.business.items.2',
      'services.categories.business.items.3',
    ],
  },
  {
    id: 'printing',
    icon: 'printer',
    titleKey: 'services.categories.printing.title',
    descriptionKey: 'services.categories.printing.description',
    itemKeys: [
      'services.categories.printing.items.0',
      'services.categories.printing.items.1',
      'services.categories.printing.items.2',
    ],
  },
  {
    id: 'other',
    icon: 'sparkles',
    titleKey: 'services.categories.other.title',
    descriptionKey: 'services.categories.other.description',
    itemKeys: ['services.categories.other.items.0', 'services.categories.other.items.1'],
  },
];
