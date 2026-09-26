import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { FaqItem } from '../../../core/models';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [TranslatePipe, LucideDynamicIcon],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqAccordionComponent {
  readonly items = input.required<FaqItem[]>();
  readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
