import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { AppLanguage, LanguageService } from '../../../core/services/language.service';

interface LangOption {
  code: AppLanguage;
  nativeCode: string;
  label: string;
}

const LANGUAGES: LangOption[] = [
  { code: 'en', nativeCode: 'EN', label: 'English' },
  { code: 'ar', nativeCode: 'AR', label: 'العربية' },
  { code: 'ur', nativeCode: 'UR', label: 'اردو' },
];

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
  readonly languages = LANGUAGES;

  readonly isOpen = signal(false);
  readonly openUpward = signal(false);

  private readonly host = inject(ElementRef<HTMLElement>);
  private static readonly PANEL_HEIGHT = 180;

  get current(): LangOption {
    return this.languages.find((l) => l.code === this.lang.currentLang()) ?? this.languages[0];
  }

  toggle(): void {
    this.isOpen.update((open) => !open);
    if (this.isOpen()) this.updatePanelDirection();
  }

  select(code: AppLanguage): void {
    this.lang.setLanguage(code);
    this.isOpen.set(false);
  }

  private updatePanelDirection(): void {
    const rect = this.host.nativeElement.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    this.openUpward.set(spaceBelow < LanguageSwitcherComponent.PANEL_HEIGHT && spaceAbove > spaceBelow);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('keydown.escape')
  onEscape(): void {
    this.isOpen.set(false);
  }
}
