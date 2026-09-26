import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PROVIDER_BENEFITS } from '../../core/data/provider-benefits.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ProviderFormComponent } from '../../shared/components/provider-form/provider-form.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [TranslatePipe, SectionHeadingComponent, ProviderFormComponent, RevealDirective],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProvidersComponent {
  readonly benefits = PROVIDER_BENEFITS;
}
