import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ProcessStep } from '../../../core/models';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [TranslatePipe, LucideDynamicIcon],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepCardComponent {
  readonly step = input.required<ProcessStep>();
  readonly isLast = input(false);
}
