import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { PROCESS_STEPS } from '../../core/data/process-steps.data';
import { RequestFormComponent } from '../../shared/components/request-form/request-form.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-request-service',
  standalone: true,
  imports: [TranslatePipe, LucideDynamicIcon, RequestFormComponent, RevealDirective],
  templateUrl: './request-service.component.html',
  styleUrl: './request-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestServiceComponent {
  readonly steps = PROCESS_STEPS;
}
