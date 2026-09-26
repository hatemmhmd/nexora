import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { SERVICE_CATEGORIES } from '../../core/data/service-categories.data';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, TranslatePipe, LucideDynamicIcon, ServiceCardComponent, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  readonly categories = SERVICE_CATEGORIES;
}
