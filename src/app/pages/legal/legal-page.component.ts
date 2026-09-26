import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './legal-page.component.html',
  styleUrl: './legal-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalPageComponent {
  // Set via route `data` — see app.routes.ts.
  readonly titleKey = input.required<string>();
  readonly sectionKeys = input.required<string[]>();
}
