export type ComparisonValue = 'yes' | 'no' | 'partial';

export interface ComparisonRow {
  labelKey: string;
  agency: ComparisonValue;
  marketplace: ComparisonValue;
  nexora: ComparisonValue;
}
