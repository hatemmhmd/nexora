import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ServiceCategory } from '../../../core/models';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [TranslatePipe, LucideDynamicIcon],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  readonly category = input.required<ServiceCategory>();
  readonly showItems = input(true);
  readonly number = input.required<number>();
}
