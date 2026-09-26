import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  readonly compact = input(false);
  readonly theme = inject(ThemeService);
}
