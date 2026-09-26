import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  readonly compact = input(false);
  readonly lang = inject(LanguageService);
}
