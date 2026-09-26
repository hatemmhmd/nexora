import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { SERVICE_CATEGORIES } from '../../core/data/service-categories.data';
import { PROCESS_STEPS } from '../../core/data/process-steps.data';
import { WHY_NEXORA } from '../../core/data/why-nexora.data';
import { WHO_WE_SERVE } from '../../core/data/who-we-serve.data';
import { COMPARISON_ROWS } from '../../core/data/comparison.data';
import { ComparisonValue } from '../../core/models';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { StepCardComponent } from '../../shared/components/step-card/step-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    LucideDynamicIcon,
    SectionHeadingComponent,
    ServiceCardComponent,
    StepCardComponent,
    RevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly categories = SERVICE_CATEGORIES;
  readonly steps = PROCESS_STEPS;
  readonly whyNexora = WHY_NEXORA;
  readonly whoWeServe = WHO_WE_SERVE;
  readonly comparisonRows = COMPARISON_ROWS;

  comparisonIcon(value: ComparisonValue): string {
    return value === 'yes' ? 'check' : value === 'no' ? 'x' : 'minus';
  }
}
