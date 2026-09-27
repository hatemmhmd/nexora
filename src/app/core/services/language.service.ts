import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'en' | 'ar' | 'ur';

const STORAGE_KEY = 'nexora-lang';
const RTL_LANGS: AppLanguage[] = ['ar', 'ur'];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly currentLang = signal<AppLanguage>('en');

  constructor(private readonly translate: TranslateService) {
    // Default lang/fallback are configured via provideTranslateService() in
    // app.config.ts; this just applies the persisted choice on boot.
    this.setLanguage(this.readStoredLanguage());
  }

  get isRtl(): boolean {
    return RTL_LANGS.includes(this.currentLang());
  }

  setLanguage(lang: AppLanguage): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', lang === 'ar');
    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-ur', lang === 'ur');
  }

  private readStoredLanguage(): AppLanguage {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' || stored === 'en' || stored === 'ur' ? stored : 'en';
  }
}
