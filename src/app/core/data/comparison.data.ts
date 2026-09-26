import { ComparisonRow } from '../models';

// NEXORA's honest positioning: agencies manage well but only within one
// specialty; marketplaces span many services but leave sourcing and
// coordination to the client. NEXORA combines both strengths.
export const COMPARISON_ROWS: ComparisonRow[] = [
  { labelKey: 'comparison.rows.singleContact', agency: 'no', marketplace: 'no', nexora: 'yes' },
  { labelKey: 'comparison.rows.managed', agency: 'yes', marketplace: 'no', nexora: 'yes' },
  { labelKey: 'comparison.rows.multiIndustry', agency: 'no', marketplace: 'yes', nexora: 'yes' },
  { labelKey: 'comparison.rows.customRequests', agency: 'partial', marketplace: 'no', nexora: 'yes' },
  { labelKey: 'comparison.rows.followUp', agency: 'yes', marketplace: 'no', nexora: 'yes' },
];
