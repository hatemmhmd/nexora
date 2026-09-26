import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'en' | 'ar';

const STORAGE_KEY = 'nexora-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly currentLang = signal<AppLanguage>('en');

  constructor(private readonly translate: TranslateService) {
    // Default lang/fallback are configured via provideTranslateService() in
    // app.config.ts; this just applies the persisted choice on boot.
    this.setLanguage(this.readStoredLanguage());
  }

  get isRtl(): boolean {
    return this.currentLang() === 'ar';
  }

  setLanguage(lang: AppLanguage): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', lang === 'ar');
    document.body.classList.toggle('lang-en', lang === 'en');
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLang() === 'en' ? 'ar' : 'en');
  }

  private readStoredLanguage(): AppLanguage {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' || stored === 'en' ? stored : 'en';
  }
}
