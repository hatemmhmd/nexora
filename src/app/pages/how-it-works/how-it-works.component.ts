import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { PROCESS_STEPS } from '../../core/data/process-steps.data';
import { StepCardComponent } from '../../shared/components/step-card/step-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [RouterLink, TranslatePipe, LucideDynamicIcon, StepCardComponent, RevealDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorksComponent {
  readonly steps = PROCESS_STEPS;
}
